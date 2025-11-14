import styled from 'styled-components';
import { generateCSSRules } from '../../utils/themeHelpers';

interface StyledChipProps {
  $styles?: any[];
  $category?: string;
  $element?: string;
  $variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  $size?: 'small' | 'medium' | 'large';
  $clickable?: boolean;
}

const variantColors = {
  default: {
    background: '#e9ecef',
    color: '#495057',
    hoverBackground: '#dee2e6',
  },
  primary: {
    background: '#667eea',
    color: '#ffffff',
    hoverBackground: '#5568d3',
  },
  success: {
    background: '#28a745',
    color: '#ffffff',
    hoverBackground: '#218838',
  },
  warning: {
    background: '#ffc107',
    color: '#212529',
    hoverBackground: '#e0a800',
  },
  danger: {
    background: '#dc3545',
    color: '#ffffff',
    hoverBackground: '#c82333',
  },
};

const sizeStyles = {
  small: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    borderRadius: '12px',
  },
  medium: {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    borderRadius: '16px',
  },
  large: {
    padding: '0.625rem 1rem',
    fontSize: '1rem',
    borderRadius: '20px',
  },
};

export const StyledChip = styled.div<StyledChipProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${(props) => sizeStyles[props.$size || 'medium'].padding};
  font-size: ${(props) => sizeStyles[props.$size || 'medium'].fontSize};
  border-radius: ${(props) => sizeStyles[props.$size || 'medium'].borderRadius};
  background: ${(props) => variantColors[props.$variant || 'default'].background};
  color: ${(props) => variantColors[props.$variant || 'default'].color};
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  user-select: none;

  &:hover {
    background: ${(props) =>
      props.$clickable ? variantColors[props.$variant || 'default'].hoverBackground : variantColors[props.$variant || 'default'].background};
  }

  /* Estilos dinámicos desde BD */
  ${(props) => generateCSSRules(props.$styles, props.$category || '', props.$element || '')}
`;

export const StyledChipIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledChipLabel = styled.span`
  line-height: 1;
`;

export const StyledChipRemove = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    opacity: 1;
  }
`;
