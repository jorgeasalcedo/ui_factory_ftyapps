import { BaseComponentProps } from '../../types';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectData {
  options?: SelectOption[];
  placeholder?: string;
  default_value?: string;
  styles?: any[];
}

export interface SelectComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: SelectData;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}
