import { BaseComponentProps } from '../../types';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MultiSelectData {
  options?: MultiSelectOption[];
  placeholder?: string;
  searchable?: boolean;
  styles?: any[];
}

export interface MultiSelectComponentProps extends Omit<BaseComponentProps, 'data'> {
  data: MultiSelectData;
  value?: string[];
  onChange?: (selectedValues: string[]) => void;
  disabled?: boolean;
  maxHeight?: string;
  showChips?: boolean;
  onRemoveChip?: (value: string) => void;
}
