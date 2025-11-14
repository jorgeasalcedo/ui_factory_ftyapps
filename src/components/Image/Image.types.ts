import { BaseComponentProps } from '../../types';

export interface ImageData {
  src: string;
  alt?: string;
  styles?: any[];
}

export interface ImageComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: ImageData;
  alt?: string;
  loading?: 'lazy' | 'eager';
  width?: string | number;
  height?: string | number;
}
