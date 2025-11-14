import { BaseComponentProps } from '../../types';

export interface ChipData {
  label?: string;
  content_id?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  styles?: any[];
}

export interface ChipComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: ChipData;
  removable?: boolean;
  onRemove?: (event: React.MouseEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}
