import React from 'react';
import {
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckboxLabel,
} from './Checkbox.styled';
import { CheckboxComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  data,
  checked,
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
    assertValidComponent({ data, $category, $element }, 'CheckboxComponent');
  }

  const label = data?.label || '';
  const value = data?.value || '';
  const styles = data?.styles || [];

  return (
    <StyledCheckboxContainer
      $styles={styles}
      $category={$category}
      $element={$element}
    >
      <StyledCheckboxInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        value={value}
        $styles={styles}
        $category={$category}
        $element={`${$element}_input`}
        {...rest}
      />
      {label && <StyledCheckboxLabel>{label}</StyledCheckboxLabel>}
    </StyledCheckboxContainer>
  );
};

CheckboxComponent.displayName = 'CheckboxComponent';
