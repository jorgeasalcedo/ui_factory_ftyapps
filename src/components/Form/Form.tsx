import React from 'react';
import { StyledForm } from './Form.styled';
import { FormComponentProps } from './types';

export const FormComponent: React.FC<FormComponentProps> = ({
  data,
  onSubmit,
  method,
  action,
  children,
  $category,
  $element,
  ...rest
}) => {
  const styles = data?.styles || [];

  return (
    <StyledForm
      onSubmit={onSubmit}
      method={method}
      action={action}
      $styles={styles}
      $category={$category}
      $element={$element}
      {...rest}
    >
      {children}
    </StyledForm>
  );
};

FormComponent.displayName = 'FormComponent';
