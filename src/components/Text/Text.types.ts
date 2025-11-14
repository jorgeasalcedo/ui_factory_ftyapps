import { BaseComponentProps } from '../../types';

export type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div';

export interface TextData {
  text?: string;
  content_id?: string;
  content_ids?: string[];
  element?: ElementType;
  styles?: any[];
}

export interface TextComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: TextData | string;
  content?: Record<string, string> | string;
  elementType?: ElementType;
  onClick?: (event: React.MouseEvent) => void;
}
