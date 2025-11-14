import styled from 'styled-components';
import { StyledBaseProps } from '../../types';
import { generateCSSRules, objectToCssString } from '../../utils/themeHelpers';

export const StyledButton = styled.button<StyledBaseProps>`
  /* Reset básico para button */
  font: inherit;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  
  /* Estilos dinámicos desde la base de datos */
  ${({ theme, $category = 'global', $element = 'button' }) => {
    if (theme && (theme as any).styles) {
      return generateCSSRules((theme as any).styles, $category, $element);
    }
    
    // Fallback: si nos pasan un objeto de estilos directo
    if (theme && typeof theme === 'object') {
      return `&& { ${objectToCssString(theme as any)} }`;
    }
    
    return '';
  }};

  /* Estado disabled */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
