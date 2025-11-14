import { BaseComponentProps } from '../../types';

export interface LabelData {
  text?: string;
  content_id?: string;
  styles?: any[];
}

export interface LabelComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: LabelData;
  htmlFor?: string;
  children?: React.ReactNode;
}
