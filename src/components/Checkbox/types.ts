import { BaseComponentProps } from '../../types';

export interface CheckboxData {
  label?: string;
  value?: string;
  checked?: boolean;
  styles?: any[];
}

export interface CheckboxComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: CheckboxData;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}
