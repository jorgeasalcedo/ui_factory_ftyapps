import styled, { css } from 'styled-components';
import { StyledBaseProps } from '../../types';
import { generateCSSRules } from '../../utils/themeHelpers';
import { ElementType } from './Text.types';

const baseStyles = css<StyledBaseProps>`
  margin: 0;
  padding: 0;
  
  ${({ theme, $category = 'global', $element = 'text' }) => {
    if (theme && (theme as any).styles) {
      return generateCSSRules((theme as any).styles, $category, $element);
    }
    return '';
  }};
`;

/**
 * Crea un componente styled dinámico basado en el tipo de elemento HTML
 */
export function createStyledTextComponent(element: ElementType) {
  switch (element) {
    case 'h1':
      return styled.h1<StyledBaseProps>`${baseStyles}`;
    case 'h2':
      return styled.h2<StyledBaseProps>`${baseStyles}`;
    case 'h3':
      return styled.h3<StyledBaseProps>`${baseStyles}`;
    case 'h4':
      return styled.h4<StyledBaseProps>`${baseStyles}`;
    case 'h5':
      return styled.h5<StyledBaseProps>`${baseStyles}`;
    case 'h6':
      return styled.h6<StyledBaseProps>`${baseStyles}`;
    case 'p':
      return styled.p<StyledBaseProps>`${baseStyles}`;
    case 'span':
      return styled.span<StyledBaseProps>`${baseStyles}`;
    case 'label':
      return styled.label<StyledBaseProps>`${baseStyles}`;
    case 'div':
      return styled.div<StyledBaseProps>`${baseStyles}`;
    default:
      return styled.span<StyledBaseProps>`${baseStyles}`;
  }
}
