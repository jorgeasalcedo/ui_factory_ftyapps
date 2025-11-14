import React from 'react';
import { StyledSelect } from './Select.styled';
import { SelectComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const SelectComponent: React.FC<SelectComponentProps> = ({
  data,
  value,
  onChange,
  disabled = false,
  required = false,
  name,
  id,
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'SelectComponent');
  }

  const options = data?.options || [];
  const placeholder = data?.placeholder || 'Seleccionar...';
  const styles = data?.styles || [];

  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      $styles={styles}
      $category={$category}
      $element={$element}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option
          key={`${option.value}-${index}`}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

SelectComponent.displayName = 'SelectComponent';
