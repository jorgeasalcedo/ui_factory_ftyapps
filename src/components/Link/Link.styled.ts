import styled from 'styled-components';
import { StyledBaseProps } from '../../types';
import { generateCSSRules, objectToCssString } from '../../utils/themeHelpers';

export const StyledLink = styled.a<StyledBaseProps>`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  ${({ theme, $category = 'global', $element = 'link' }) => {
    if (theme && (theme as any).styles) {
      return generateCSSRules((theme as any).styles, $category, $element);
    }
    
    if (theme && typeof theme === 'object') {
      return `&& { ${objectToCssString(theme as any)} }`;
    }
    
    return '';
  }};
`;
