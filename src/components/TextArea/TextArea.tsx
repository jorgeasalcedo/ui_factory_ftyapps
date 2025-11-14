import React from 'react';
import { StyledTextArea } from './TextArea.styled';
import { TextAreaComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const TextAreaComponent: React.FC<TextAreaComponentProps> = ({
  data,
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 4,
  cols,
  maxLength,
  name,
  id,
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'TextAreaComponent');
  }

  const placeholder = data?.placeholder || '';
  const styles = data?.styles || [];

  return (
    <StyledTextArea
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      name={name}
      id={id}
      placeholder={placeholder}
      $styles={styles}
      $category={$category}
      $element={$element}
      {...rest}
    />
  );
};

TextAreaComponent.displayName = 'TextAreaComponent';
