import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledFormProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;
