import { BaseComponentProps } from '../../types';

export interface LinkData {
  content_id?: string;
  href: string;
  text?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  styles?: any[];
}

export interface LinkComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: LinkData;
  content?: Record<string, string> | string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
