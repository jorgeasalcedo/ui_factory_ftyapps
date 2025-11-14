import { BaseComponentProps } from '../../types';

export interface TextAreaData {
  placeholder?: string;
  content_id?: string;
  default_value?: string;
  styles?: any[];
}

export interface TextAreaComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: TextAreaData;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  name?: string;
  id?: string;
}
