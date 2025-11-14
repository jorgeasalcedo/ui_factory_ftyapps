import { BaseComponentProps } from '../types';

/**
 * Valida que un componente tenga las props mínimas requeridas
 */
export function validateBaseProps(props: BaseComponentProps): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!props.data) {
    errors.push('La prop "data" es requerida');
  }

  if (props.$category && typeof props.$category !== 'string') {
    errors.push('La prop "$category" debe ser un string');
  }

  if (props.$element && typeof props.$element !== 'string') {
    errors.push('La prop "$element" debe ser un string');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Valida que el contenido tenga el formato correcto
 */
export function validateContent(content: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (content === null || content === undefined) {
    return { isValid: true, errors: [] }; // Contenido opcional
  }

  if (typeof content !== 'string' && typeof content !== 'object') {
    errors.push('El contenido debe ser un string o un objeto');
  }

  if (typeof content === 'object' && Array.isArray(content)) {
    errors.push('El contenido no puede ser un array');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Valida que los estilos tengan el formato correcto
 */
export function validateStyles(styles: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!styles) {
    return { isValid: true, errors: [] }; // Estilos opcionales
  }

  if (!Array.isArray(styles)) {
    errors.push('Los estilos deben ser un array');
    return { isValid: false, errors };
  }

  styles.forEach((style, index) => {
    if (!style.property) {
      errors.push(`El estilo en índice ${index} no tiene la propiedad "property"`);
    }

    if (!style.mobile_value && !style.desktop_value && !style.value) {
      errors.push(
        `El estilo "${style.property}" en índice ${index} no tiene ningún valor definido`
      );
    }

    if (style.category && typeof style.category !== 'string') {
      errors.push(
        `El estilo "${style.property}" tiene una categoría inválida (debe ser string)`
      );
    }

    if (style.element && typeof style.element !== 'string') {
      errors.push(
        `El estilo "${style.property}" tiene un elemento inválido (debe ser string)`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Valida que los comportamientos sean funciones válidas
 */
export function validateBehaviors(behaviors: Record<string, any>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const validBehaviors = ['onClick', 'onHover', 'onFocus', 'onChange', 'onBlur'];

  Object.entries(behaviors).forEach(([key, value]) => {
    if (validBehaviors.includes(key)) {
      if (typeof value !== 'function' && value !== undefined) {
        errors.push(`El comportamiento "${key}" debe ser una función`);
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validador principal que combina todas las validaciones
 */
export function validateComponent(props: BaseComponentProps): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const allErrors: string[] = [];
  const warnings: string[] = [];

  const baseValidation = validateBaseProps(props);
  allErrors.push(...baseValidation.errors);

  const contentValidation = validateContent(props.content);
  allErrors.push(...contentValidation.errors);

  if (props.data?.styles) {
    const stylesValidation = validateStyles(props.data.styles);
    allErrors.push(...stylesValidation.errors);
  }

  const behaviors: Record<string, any> = {};
  ['onClick', 'onHover', 'onFocus', 'onChange', 'onBlur'].forEach((key) => {
    if (props[key as keyof BaseComponentProps]) {
      behaviors[key] = props[key as keyof BaseComponentProps];
    }
  });

  const behaviorsValidation = validateBehaviors(behaviors);
  allErrors.push(...behaviorsValidation.errors);

  // Warnings (no bloquean pero advierten)
  if (!props.$category) {
    warnings.push('Se recomienda especificar $category para estilos específicos');
  }

  if (!props.$element) {
    warnings.push('Se recomienda especificar $element para estilos específicos');
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings,
  };
}

/**
 * Helper para usar en desarrollo: lanza error si la validación falla
 */
export function assertValidComponent(
  props: BaseComponentProps,
  componentName: string
): void {
  if (process.env.NODE_ENV === 'production') return;

  const validation = validateComponent(props);

  if (!validation.isValid) {
    console.error(`❌ Validación fallida en ${componentName}:`, validation.errors);
    throw new Error(
      `Componente ${componentName} tiene props inválidas: ${validation.errors.join(', ')}`
    );
  }

  if (validation.warnings.length > 0) {
    console.warn(`⚠️ Advertencias en ${componentName}:`, validation.warnings);
  }
}
