import styled from 'styled-components';
import { StyledBaseProps } from '../../types';
import { generateCSSRules, objectToCssString } from '../../utils/themeHelpers';

export const StyledInput = styled.input<StyledBaseProps>`
  /* Reset básico */
  font: inherit;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  width: 100%;
  
  /* Estilos dinámicos */
  ${({ theme, $category = 'global', $element = 'input' }) => {
    if (theme && (theme as any).styles) {
      return generateCSSRules((theme as any).styles, $category, $element);
    }
    
    if (theme && typeof theme === 'object') {
      return `&& { ${objectToCssString(theme as any)} }`;
    }
    
    return '';
  }};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #f5f5f5;
  }

  &:focus {
    border-color: #8A2BE2;
  }
`;
