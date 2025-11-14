import React, { useState, useRef, useEffect } from 'react';
import {
  StyledMultiSelectContainer,
  StyledMultiSelectTrigger,
  StyledMultiSelectPlaceholder,
  StyledMultiSelectArrow,
  StyledMultiSelectDropdown,
  StyledSearchInput,
  StyledMultiSelectOption,
  StyledSelectedCount,
  StyledChipsContainer,
} from './MultiSelect.styled';
import { MultiSelectComponentProps } from './types';
import { assertValidComponent } from '../../validators/componentValidator';
import { ChipComponent } from '../Chip';

export const MultiSelectComponent: React.FC<MultiSelectComponentProps> = ({
  data,
  value = [],
  onChange,
  disabled = false,
  maxHeight = '300px',
  showChips = false,
  onRemoveChip,
  $category,
  $element,
  ...rest
}) => {
  if (process.env.NODE_ENV === 'development') {
    assertValidComponent({ data, $category, $element }, 'MultiSelectComponent');
  }

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const options = data?.options || [];
  const placeholder = data?.placeholder || 'Seleccionar opciones...';
  const searchable = data?.searchable ?? true;
  const styles = data?.styles || [];

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionChange = (optionValue: string) => {
    if (disabled) return;

    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];

    onChange?.(newValue);
  };

  const handleRemoveChip = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newValue = value.filter((v) => v !== optionValue);
    onChange?.(newValue);
    onRemoveChip?.(optionValue);
  };

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOptions = options.filter((option) => value.includes(option.value));

  return (
    <div>
      <StyledMultiSelectContainer
        ref={containerRef}
        $styles={styles}
        $category={$category}
        $element={$element}
        $disabled={disabled}
        {...rest}
      >
        <StyledMultiSelectTrigger
          onClick={handleToggleDropdown}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggleDropdown();
            }
          }}
          tabIndex={disabled ? -1 : 0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          $isOpen={isOpen}
          $styles={styles}
          $category={$category}
          $element={`${$element}_trigger`}
        >
          {value.length === 0 ? (
            <StyledMultiSelectPlaceholder>{placeholder}</StyledMultiSelectPlaceholder>
          ) : (
            <StyledSelectedCount>
              {value.length} {value.length === 1 ? 'seleccionado' : 'seleccionados'}
            </StyledSelectedCount>
          )}
          <StyledMultiSelectArrow $isOpen={isOpen} />
        </StyledMultiSelectTrigger>

        <StyledMultiSelectDropdown
          $isOpen={isOpen}
          $maxHeight={maxHeight}
          $styles={styles}
          $category={$category}
          $element={`${$element}_dropdown`}
          role="listbox"
          aria-multiselectable="true"
        >
          {searchable && (
            <StyledSearchInput
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {filteredOptions.length === 0 ? (
            <div style={{ padding: '1rem', textAlign: 'center', color: '#6c757d' }}>
              No se encontraron opciones
            </div>
          ) : (
            filteredOptions.map((option) => (
              <StyledMultiSelectOption
                key={option.value}
                className={option.disabled ? 'disabled' : ''}
              >
                <input
                  type="checkbox"
                  checked={value.includes(option.value)}
                  onChange={() => handleOptionChange(option.value)}
                  disabled={option.disabled}
                  aria-label={option.label}
                />
                {option.label}
              </StyledMultiSelectOption>
            ))
          )}
        </StyledMultiSelectDropdown>
      </StyledMultiSelectContainer>

      {showChips && value.length > 0 && (
        <StyledChipsContainer>
          {selectedOptions.map((option) => (
            <ChipComponent
              key={option.value}
              data={{ label: option.label, variant: 'primary' }}
              removable={true}
              onRemove={(e) => handleRemoveChip(option.value, e)}
              $category={$category}
              $element={`${$element}_chip`}
            />
          ))}
        </StyledChipsContainer>
      )}
    </div>
  );
};

MultiSelectComponent.displayName = 'MultiSelectComponent';
