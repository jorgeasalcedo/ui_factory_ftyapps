import { CSSProperties } from 'react';
import { StyleItem, ThemeStyles, ProcessedStyles, StyleGroups } from '../types';

/**
 * Reemplaza tokens @variable por sus valores reales
 * Prioriza tokens del runtime (window.__SITE_THEME)
 * Soporta alias con '-' y '_' indistintamente
 */
export const replaceVariables = (
  value: string,
  theme?: ThemeStyles
): string => {
  if (!value) return "";
  
  // Validación: asegurar que value es un string
  if (typeof value !== 'string') {
    return String(value || '');
  }

  // Tokens del runtime expuestos en window.__SITE_THEME
  const runtimeTokens: Record<string, string> =
    (typeof window !== 'undefined' && (window as any).__SITE_THEME) || {};

  // Admite tokens con '-' o '_' indistintamente (aliasing)
  return value.replace(/@([a-zA-Z0-9_\-]+)/g, (match, varName) => {
    const candidates = [
      varName,
      varName.replace(/_/g, '-'),
      varName.replace(/-/g, '_'),
      varName === 'surface' ? 'card_background' : '',
    ];

    // 1) Prioriza tokens del runtime
    for (const key of candidates) {
      const rt = runtimeTokens[key];
      if (typeof rt === 'string' && rt.length > 0) return rt;
    }

    // 2) Fallback: intenta resolver desde "theme" si viene como mapa antiguo
    if (theme && !Array.isArray(theme)) {
      for (const key of candidates) {
        const item = (theme as any)[key] as StyleItem | undefined;
        if (item?.mobile_value || item?.desktop_value) {
          return item.mobile_value || item.desktop_value || match;
        }
      }
    }

    // Fallback alias surface -> card_background si existe en runtimeTokens
    if (varName === 'surface' && runtimeTokens['card_background']) {
      return runtimeTokens['card_background'];
    }
    
    return match;
  });
};

/**
 * Procesa los estilos filtrándolos por categoría y elemento
 * Los agrupa por estado (normal, hover, active, focus) y breakpoint (mobile, desktop)
 */
function processStyleItems(
  styles: StyleItem[],
  category: string,
  element: string,
  componentName?: string
): ProcessedStyles {
  const processed: ProcessedStyles = {
    mobile: { normal: {}, hover: {}, active: {}, focus: {} },
    desktop: { normal: {}, hover: {}, active: {}, focus: {} },
  };

  if (!Array.isArray(styles)) return processed;

  const filtered = styles.filter(
    (it) =>
      it &&
      it.category === category &&
      it.element === element &&
      (componentName ? it.component === componentName : true)
  );

  for (const item of filtered) {
    let mobileVal = item.mobile_value ?? '';
    let desktopVal = item.desktop_value ?? '';

    if (!mobileVal || !desktopVal) {
      let parsed: any = null;
      if (typeof item.value === 'string' && item.value.trim().startsWith('{')) {
        try { parsed = JSON.parse(item.value); } catch {}
      } else if (typeof item.value === 'object') {
        parsed = item.value;
      }
      
      if (typeof item.value !== 'string') {
        mobileVal = mobileVal || parsed?.mobile || '';
        desktopVal = desktopVal || parsed?.desktop || '';
      } else {
        mobileVal = mobileVal || parsed?.mobile || item.value || '';
        desktopVal = desktopVal || parsed?.desktop || item.value || '';
      }
    }

    const finalMobile = replaceVariables(mobileVal);
    const finalDesktop = replaceVariables(desktopVal);

    let prop = item.property || '';
    let targetGroup: keyof StyleGroups = 'normal';

    // Detectar prefijos de estado
    if (prop.startsWith('hover-')) {
      targetGroup = 'hover';
      prop = prop.substring(6);
    } else if (prop.startsWith('active-')) {
      targetGroup = 'active';
      prop = prop.substring(7);
    } else if (prop.startsWith('focus-')) {
      targetGroup = 'focus';
      prop = prop.substring(6);
    }

    // Normalizar nombres de propiedades
    prop = prop.replace(/_/g, '-');
    const alias = prop.toLowerCase().replace(/\s+/g, '');
    if (alias === 'bg') prop = 'background';
    if (alias === 'backgroundcolor') prop = 'background-color';
    if (alias === 'text-color' || alias === 'textcolor' || alias === 'txt-color') prop = 'color';
    if (alias === 'boxshadow') prop = 'box-shadow';

    if (finalMobile) processed.mobile[targetGroup][prop] = finalMobile;
    if (finalDesktop) processed.desktop[targetGroup][prop] = finalDesktop;
  }

  return processed;
}

/**
 * Genera reglas CSS para styled-components con soporte para mobile y desktop
 */
export const generateCSSRules = (
  theme: any,
  category: string,
  element: string
): string => {
  const styles = Array.isArray(theme) ? theme : Object.values(theme || {});
  const { mobile, desktop } = processStyleItems(styles, category, element);

  const toCss = (obj: Record<string, string>) => 
    Object.entries(obj).map(([k, v]) => `${k}: ${v};`).join('\n');

  return `
    ${toCss(mobile.normal)}
    ${Object.keys(mobile.hover).length > 0 ? `&:hover { ${toCss(mobile.hover)} }` : ''}
    ${Object.keys(mobile.active).length > 0 ? `&:active { ${toCss(mobile.active)} }` : ''}

    @media (min-width: 768px) {
      ${toCss(desktop.normal)}
      ${Object.keys(desktop.hover).length > 0 ? `&:hover { ${toCss(desktop.hover)} }` : ''}
      ${Object.keys(desktop.active).length > 0 ? `&:active { ${toCss(desktop.active)} }` : ''}
    }
  `;
};

/**
 * Convierte kebab-case a camelCase
 */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Convierte camelCase a kebab-case
 */
export function camelToKebab(str: string): string {
  return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

/**
 * Convierte estilos del backend en objeto CSS
 * Permite elegir el modo ('mobile' o 'desktop')
 */
export function getEmotionStyle(
  styles: StyleItem[],
  category: string,
  element: string,
  screenMode: 'mobile' | 'desktop',
  componentName?: string
): Record<string, any> {
  const processed = processStyleItems(styles, category, element, componentName);
  const relevantStyles = processed[screenMode];

  const styleObj: CSSProperties & { [key: string]: any } = {};

  const toCamelCase = (obj: Record<string, string>) =>
    Object.entries(obj).reduce((acc, [k, v]) => {
      acc[kebabToCamel(k)] = v;
      return acc;
    }, {} as Record<string, string>);

  Object.assign(styleObj, toCamelCase(relevantStyles.normal));
  
  if (Object.keys(relevantStyles.hover).length > 0) {
    styleObj[':hover'] = toCamelCase(relevantStyles.hover);
  }
  if (Object.keys(relevantStyles.active).length > 0) {
    styleObj[':active'] = toCamelCase(relevantStyles.active);
  }
  if (Object.keys(relevantStyles.focus).length > 0) {
    styleObj[':focus-visible'] = toCamelCase(relevantStyles.focus);
  }

  return styleObj;
}

/**
 * Convierte un objeto de estilos a string CSS
 * Soporta pseudo-clases (:hover, :active, :focus)
 */
export function objectToCssString(styles: Record<string, any>): string {
  if (!styles) return "";
  
  let css = "";
  
  Object.entries(styles).forEach(([key, value]) => {
    const isPseudoHover = key === ":hover";
    const isPseudoActive = key === ":active";
    const isPseudoFocus = key === ":focus";
    const isPseudoFocusVisible = key === ":focus-visible";
    
    if ((isPseudoHover || isPseudoActive || isPseudoFocus || isPseudoFocusVisible) && typeof value === "object") {
      const selector = isPseudoHover
        ? '&:hover'
        : isPseudoActive
          ? '&:active'
          : isPseudoFocusVisible
            ? '&:focus-visible'
            : '&:focus';
      
      css += `${selector} {`;
      Object.entries(value).forEach(([hKey, hValue]) => {
        css += `${camelToKebab(hKey)}: ${hValue};`;
      });
      css += `}`;
    } else {
      css += `${camelToKebab(key)}: ${value};`;
    }
  });
  
  return css;
}
