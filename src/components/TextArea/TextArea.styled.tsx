import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledTextAreaProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  /* Estilos base */
  font-family: inherit;
  font-size: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  width: 100%;
  min-height: 100px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;
