import { BaseComponentProps } from '../../types';

export interface FormData {
  styles?: any[];
}

export interface FormComponentProps extends Omit<BaseComponentProps, 'data'> {
  data?: FormData;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  method?: 'get' | 'post';
  action?: string;
  children?: React.ReactNode;
}
