import { BaseComponentProps } from '../../types';

export interface InputData {
  content_id?: string;
  placeholder?: string;
  type?: string;
  styles?: any[];
}

export interface InputComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: InputData;
  content?: Record<string, string> | string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
}
