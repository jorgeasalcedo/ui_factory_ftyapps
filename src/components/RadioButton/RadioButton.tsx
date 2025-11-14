import React from 'react';
import {
  StyledRadioContainer,
  StyledRadioLabel,
  StyledRadioInput,
  StyledRadioText,
} from './RadioButton.styled';
import { RadioButtonComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({
  data,
  value,
  onChange,
  disabled = false,
  required = false,
  orientation = 'vertical',
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'RadioButtonComponent');
  }

  const options = data?.options || [];
  const name = data?.name || `radio-group-${Math.random().toString(36).substr(2, 9)}`;
  const styles = data?.styles || [];

  return (
    <StyledRadioContainer $orientation={orientation} role="radiogroup">
      {options.map((option, index) => {
        const isChecked = value === option.value;
        const isDisabled = disabled || option.disabled;

        return (
          <StyledRadioLabel
            key={`${option.value}-${index}`}
            $styles={styles}
            $category={$category}
            $element={$element}
            $disabled={isDisabled}
          >
            <StyledRadioInput
              type="radio"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={onChange}
              disabled={isDisabled}
              required={required}
              $styles={styles}
              $category={$category}
              $element={`${$element}_input`}
              {...rest}
            />
            <StyledRadioText>{option.label}</StyledRadioText>
          </StyledRadioLabel>
        );
      })}
    </StyledRadioContainer>
  );
};

RadioButtonComponent.displayName = 'RadioButtonComponent';
