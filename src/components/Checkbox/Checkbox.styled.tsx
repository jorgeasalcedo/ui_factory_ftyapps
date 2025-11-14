import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledCheckboxContainerProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledCheckboxContainer = styled.label<StyledCheckboxContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

interface StyledCheckboxInputProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledCheckboxInput = styled.input<StyledCheckboxInputProps>`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: #007bff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

export const StyledCheckboxLabel = styled.span`
  font-size: 1rem;
  color: #333;
`;
