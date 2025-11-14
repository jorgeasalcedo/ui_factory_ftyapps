import React from 'react';
import { StyledLabel } from './Label.styled';
import { LabelComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const LabelComponent: React.FC<LabelComponentProps> = ({
  data,
  htmlFor,
  children,
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'LabelComponent');
  }

  const text = data?.text || '';
  const styles = data?.styles || [];

  return (
    <StyledLabel
      htmlFor={htmlFor}
      $styles={styles}
      $category={$category}
      $element={$element}
      {...rest}
    >
      {text || children}
    </StyledLabel>
  );
};

LabelComponent.displayName = 'LabelComponent';
