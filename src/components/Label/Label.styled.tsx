import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledLabelProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;
