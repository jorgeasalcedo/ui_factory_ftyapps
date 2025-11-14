import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledRadioContainerProps {
  $orientation?: 'horizontal' | 'vertical';
}

export const StyledRadioContainer = styled.div<StyledRadioContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.$orientation === 'horizontal' ? 'row' : 'column')};
  gap: ${(props) => (props.$orientation === 'horizontal' ? '1rem' : '0.5rem')};
  flex-wrap: wrap;
`;

interface StyledRadioLabelProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
  $disabled?: boolean;
}

export const StyledRadioLabel = styled.label<StyledRadioLabelProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  user-select: none;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.6 : 0.8)};
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

interface StyledRadioInputProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledRadioInput = styled.input<StyledRadioInputProps>`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
  accent-color: #007bff;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

export const StyledRadioText = styled.span`
  font-size: 1rem;
  color: #333;
`;
