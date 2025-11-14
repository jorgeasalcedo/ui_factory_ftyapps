import React from 'react';
import {
  StyledChip,
  StyledChipIcon,
  StyledChipLabel,
  StyledChipRemove,
} from './Chip.styled';
import { ChipComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';

export const ChipComponent: React.FC<ChipComponentProps> = ({
  data,
  removable = false,
  onRemove,
  onClick,
  size = 'medium',
  icon,
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'ChipComponent');
  }

  const label = data?.label || '';
  const variant = data?.variant || 'default';
  const styles = data?.styles || [];

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.(e);
  };

  return (
    <StyledChip
      onClick={onClick}
      $variant={variant}
      $size={size}
      $styles={styles}
      $category={$category}
      $element={$element}
      $clickable={!!onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...rest}
    >
      {icon && <StyledChipIcon>{icon}</StyledChipIcon>}
      <StyledChipLabel>{label}</StyledChipLabel>
      {removable && (
        <StyledChipRemove
          onClick={handleRemove}
          aria-label={`Remover ${label}`}
          type="button"
        >
          ×
        </StyledChipRemove>
      )}
    </StyledChip>
  );
};

ChipComponent.displayName = 'ChipComponent';
