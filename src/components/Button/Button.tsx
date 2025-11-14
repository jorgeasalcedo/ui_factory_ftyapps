import React from 'react';
import { ButtonComponentProps } from './Button.types';
import { StyledButton } from './Button.styled';
import { assertValidComponent } from '../../validators/componentValidator';

/**
 * ButtonComponent - Componente botón con estilos dinámicos
 * 
 * @example
 * ```tsx
 * <ButtonComponent 
 *   data={{ content_id: "btn_cta" }}
 *   content={{ btn_cta: "Comprar ahora" }}
 *   $category="hero"
 *   $element="button_primary"
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 */
export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  data,
  content,
  $category = 'global',
  $element = 'button',
  onClick,
  disabled = false,
  type = 'button',
  className,
  ...rest
}) => {
  // Validación en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    assertValidComponent({ data, content, $category, $element }, 'ButtonComponent');
  }

  // Resolver el texto a mostrar
  const getButtonLabel = (): string => {
    // Si content es un string directo
    if (typeof content === 'string') {
      return content;
    }

    // Si data tiene un text directo
    if (data.text) {
      return data.text;
    }

    // Si data tiene content_id y content es un objeto
    if (data.content_id && content && typeof content === 'object') {
      return content[data.content_id] || '';
    }

    return '';
  };

  const label = getButtonLabel();

  return (
    <StyledButton
      $category={$category}
      $element={$element}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      theme={data.styles ? { styles: data.styles } : undefined}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};

ButtonComponent.displayName = 'ButtonComponent';
