import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledSelectProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledSelect = styled.select<StyledSelectProps>`
  /* Estilos base */
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  min-width: 150px;

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
