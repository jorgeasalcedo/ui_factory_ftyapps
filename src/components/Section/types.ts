import { BaseComponentProps } from '../../types';

export interface SectionData {
  styles?: any[];
}

export interface SectionComponentProps extends Omit<BaseComponentProps, 'data'> {
  data?: SectionData;
  children?: React.ReactNode;
  role?: string;
  'aria-label'?: string;
}
