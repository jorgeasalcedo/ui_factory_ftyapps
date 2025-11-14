import { BaseComponentProps } from '../../types';

export interface ButtonData {
  content_id?: string;
  text?: string;
  styles?: any[];
}

export interface ButtonComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: ButtonData;
  content?: Record<string, string> | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
