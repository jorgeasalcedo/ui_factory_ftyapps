import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledSectionProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  display: block;
  width: 100%;

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;
