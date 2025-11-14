import styled from 'styled-components';
import { StyledBaseProps } from '../../types';
import { generateCSSRules, objectToCssString } from '../../utils/themeHelpers';

export const StyledDiv = styled.div<StyledBaseProps>`
  ${({ theme, $category = 'global', $element = 'div' }) => {
    if (theme && (theme as any).styles) {
      return generateCSSRules((theme as any).styles, $category, $element);
    }
    
    if (theme && typeof theme === 'object') {
      return `&& { ${objectToCssString(theme as any)} }`;
    }
    
    return '';
  }};
`;
