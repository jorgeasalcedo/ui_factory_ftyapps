import styled from 'styled-components';
import { StyledBaseProps } from '../../types';
import { generateCSSRules } from '../../utils/themeHelpers';

export const StyledImage = styled.img<StyledBaseProps>`
  display: block;
  max-width: 100%;
  height: auto;
  
  ${({ theme, $category = 'global', $element = 'image' }) => {
    if (theme && (theme as any).styles) {
      return generateCSSRules((theme as any).styles, $category, $element);
    }
    return '';
  }};
`;
