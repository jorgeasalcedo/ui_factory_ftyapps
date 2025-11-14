import { BaseComponentProps } from '../../types';

export interface SpanData {
  text?: string;
  content_id?: string;
  styles?: any[];
}

export interface SpanComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: SpanData;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}
