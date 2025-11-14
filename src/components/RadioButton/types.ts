import { BaseComponentProps } from '../../types';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioButtonData {
  options?: RadioOption[];
  name?: string;
  default_value?: string;
  styles?: any[];
}

export interface RadioButtonComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: RadioButtonData;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical';
}
