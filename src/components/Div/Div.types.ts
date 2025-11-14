import { BaseComponentProps } from '../../types';

export interface DivData {
  styles?: any[];
  role?: string;
  ariaLabel?: string;
}

export interface DivComponentProps extends Omit<BaseComponentProps, 'data'> {
  data?: DivData;
  children?: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
