import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledSpanProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  display: inline;
  color: inherit;
  font-size: inherit;

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;
