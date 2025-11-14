import React from 'react';
import { DivComponentProps } from './Div.types';
import { StyledDiv } from './Div.styled';

/**
 * DivComponent - Contenedor flexible con estilos dinámicos
 * 
 * @example
 * ```tsx
 * <DivComponent
 *   $category="hero"
 *   $element="container"
 * >
 *   <TextComponent data={{ text: 'Contenido' }} />
 * </DivComponent>
 * ```
 */
export const DivComponent: React.FC<DivComponentProps> = ({
  data,
  $category = 'global',
  $element = 'div',
  children,
  role,
  'aria-label': ariaLabel,
  style,
  className,
  onClick,
  ...rest
}) => {
  return (
    <StyledDiv
      $category={$category}
      $element={$element}
      role={role || data?.role}
      aria-label={ariaLabel || data?.ariaLabel}
      style={style}
      className={className}
      onClick={onClick}
      theme={data?.styles ? { styles: data.styles } : undefined}
      {...rest}
    >
      {children}
    </StyledDiv>
  );
};

DivComponent.displayName = 'DivComponent';
