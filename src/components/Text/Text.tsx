import React from 'react';
import { TextComponentProps, TextData, ElementType } from './Text.types';
import { createStyledTextComponent } from './Text.styled';
import { assertValidComponent } from '../../validators/componentValidator';

/**
 * TextComponent - Componente de texto flexible con soporte para múltiples elementos HTML
 * 
 * @example
 * ```tsx
 * <TextComponent 
 *   data={{ text: "Título Principal" }}
 *   elementType="h1"
 *   $category="hero"
 *   $element="title"
 * />
 * ```
 */
export const TextComponent: React.FC<TextComponentProps> = ({
  data,
  content,
  $category = 'global',
  $element = 'text',
  elementType: elementTypeProp,
  onClick,
  className,
  ...rest
}) => {
  // Validación en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    assertValidComponent({ data, content, $category, $element }, 'TextComponent');
  }

  /**
   * Determina el texto a mostrar basándose en la estructura de `data` y `content`.
   * Orden de prioridad:
   * 1. Si `content` es un string, lo usa directamente.
   * 2. Si `data` es un objeto, busca `text`, `content_id` o `content_ids`.
   * 3. Si `data` es un string, lo usa como clave para buscar en `content` o como valor literal.
   */
  const getTextToShow = (d: TextData | string, c: typeof content): string => {
    if (typeof c === 'string') {
      return c;
    }

    const safeContent = c || {};

    if (typeof d === 'object' && d !== null && !Array.isArray(d)) {
      if (d.text) return d.text;
      
      if (d.content_id) {
        return safeContent[d.content_id] || '';
      }
      
      if (d.content_ids && Array.isArray(d.content_ids)) {
        return d.content_ids
          .map((id: string) => safeContent[id])
          .filter(Boolean)
          .join(' ');
      }
    }

    if (typeof d === 'string') {
      return safeContent[d + '_txt'] || d;
    }

    return '';
  };

  const textToShow = getTextToShow(data, content);
  
  // Determinar el tipo de elemento HTML
  const elementType: ElementType =
    (typeof data === 'object' && data !== null && !Array.isArray(data) && data.element) ||
    elementTypeProp ||
    'span';

  const StyledElement = createStyledTextComponent(elementType);
  
  const stylesPayload =
    typeof data === 'object' && data !== null && !Array.isArray(data) && data.styles
      ? { styles: data.styles }
      : undefined;

  const Component = StyledElement as any; // Type assertion para resolver el tipo complejo

  return (
    <Component
      $category={$category}
      $element={$element}
      onClick={onClick}
      className={className}
      theme={stylesPayload}
      {...rest}
    >
      {textToShow}
    </Component>
  );
};

TextComponent.displayName = 'TextComponent';
