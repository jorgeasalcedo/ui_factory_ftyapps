import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledMultiSelectContainerProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
  $disabled?: boolean;
}

export const StyledMultiSelectContainer = styled.div<StyledMultiSelectContainerProps>`
  position: relative;
  width: 100%;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

interface StyledMultiSelectTriggerProps {
  $isOpen?: boolean;
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledMultiSelectTrigger = styled.div<StyledMultiSelectTriggerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => (props.$isOpen ? '#667eea' : '#e9ecef')};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;

  &:hover {
    border-color: ${(props) => (props.$isOpen ? '#667eea' : '#adb5bd')};
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

export const StyledMultiSelectPlaceholder = styled.span`
  color: #6c757d;
  font-size: 1rem;
`;

export const StyledMultiSelectArrow = styled.span<{ $isOpen?: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.5rem;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

interface StyledMultiSelectDropdownProps {
  $isOpen?: boolean;
  $maxHeight?: string;
  $styles?: any[];
  $category?: string;
  $element?: string;
}

export const StyledMultiSelectDropdown = styled.div<StyledMultiSelectDropdownProps>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: ${(props) => props.$maxHeight || '300px'};
  overflow-y: auto;
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid #e9ecef;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-bottom-color: #667eea;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const StyledMultiSelectOption = styled.label`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }

  input[type='checkbox'] {
    margin-right: 0.75rem;
    width: 1.125rem;
    height: 1.125rem;
    cursor: pointer;
    accent-color: #667eea;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;

    input[type='checkbox'] {
      cursor: not-allowed;
    }
  }
`;

export const StyledSelectedCount = styled.span`
  color: #667eea;
  font-weight: 600;
  font-size: 1rem;
`;

export const StyledChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;
