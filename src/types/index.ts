import React from 'react';

// Tipos base para estilos
export interface StyleItem {
  component?: string;
  property: string;
  category?: string;
  element?: string;
  mobile_value?: string;
  desktop_value?: string;
  value?: string | { mobile?: string; desktop?: string };
  style_values?: string | { mobile?: string; desktop?: string };
}

export type ThemeStyles = Record<string, StyleItem> | StyleItem[];

// Props base para componentes estilizados
export interface StyledBaseProps {
  $category?: string;
  $element?: string;
  theme?: any;
}

// Grupos de estilos por estado
export type StyleGroups = {
  normal: Record<string, string>;
  hover: Record<string, string>;
  active: Record<string, string>;
  focus: Record<string, string>;
};

// Estilos procesados por breakpoint
export type ProcessedStyles = {
  mobile: StyleGroups;
  desktop: StyleGroups;
};

// Configuración de comportamiento de componente
export interface ComponentBehavior {
  onClick?: (event: React.MouseEvent) => void;
  onHover?: (event: React.MouseEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onChange?: (event: React.ChangeEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: any;
}

// Props genéricas para componentes de la factory
export interface BaseComponentProps extends ComponentBehavior {
  data: any;
  content?: Record<string, string> | string;
  $category?: string;
  $element?: string;
  className?: string;
  dataSkeleton?: boolean;
  'data-skeleton'?: boolean;
}
