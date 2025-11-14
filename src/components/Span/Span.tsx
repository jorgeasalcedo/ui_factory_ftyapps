import React from 'react';
import { StyledSpan } from './Span.styled';
import { SpanComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const SpanComponent: React.FC<SpanComponentProps> = ({
  data,
  children,
  onClick,
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'SpanComponent');
  }

  const text = data?.text || '';
  const styles = data?.styles || [];

  return (
    <StyledSpan
      onClick={onClick}
      $styles={styles}
      $category={$category}
      $element={$element}
      {...rest}
    >
      {text || children}
    </StyledSpan>
  );
};

SpanComponent.displayName = 'SpanComponent';
