import React from 'react';
import { InputComponentProps } from './Input.types';
import { StyledInput } from './Input.styled';
import { assertValidComponent } from '../../validators/componentValidator';

/**
 * InputComponent - Campo de entrada con estilos dinámicos
 * 
 * @example
 * ```tsx
 * <InputComponent
 *   data={{ content_id: "search_placeholder" }}
 *   content={{ search_placeholder: "Buscar productos..." }}
 *   type="search"
 *   $category="search"
 *   $element="input_search"
 *   onChange={(e) => console.log(e.target.value)}
 * />
 * ```
 */
export const InputComponent: React.FC<InputComponentProps> = ({
  data,
  content,
  $category = 'global',
  $element = 'input',
  type = 'text',
  placeholder: placeholderProp,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  name,
  value,
  className,
  ...rest
}) => {
  // Validación en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    assertValidComponent({ data, content, $category, $element }, 'InputComponent');
  }

  // Resolver el placeholder
  const getPlaceholder = (): string | undefined => {
    if (placeholderProp) return placeholderProp;
    if (data.placeholder) return data.placeholder;

    if (typeof content === 'string') return content;

    if (data.content_id && content && typeof content === 'object') {
      return content[data.content_id];
    }

    return undefined;
  };

  const placeholder = getPlaceholder();

  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      $category={$category}
      $element={$element}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
      className={className}
      theme={data.styles ? { styles: data.styles } : undefined}
      {...rest}
    />
  );
};

InputComponent.displayName = 'InputComponent';
