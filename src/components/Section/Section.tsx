import React from 'react';
import { StyledSection } from './Section.styled';
import { SectionComponentProps } from './types';

export const SectionComponent: React.FC<SectionComponentProps> = ({
  data,
  children,
  role,
  $category,
  $element,
  ...rest
}) => {
  const styles = data?.styles || [];

  return (
    <StyledSection
      role={role}
      $styles={styles}
      $category={$category}
      $element={$element}
      {...rest}
    >
      {children}
    </StyledSection>
  );
};

SectionComponent.displayName = 'SectionComponent';
