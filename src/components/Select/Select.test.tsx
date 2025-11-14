import { render, screen, fireEvent } from '@testing-library/react';
import { SelectComponent } from './Select';
import { SelectOption } from './types';

describe('SelectComponent', () => {
  const mockOptions: SelectOption[] = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];

  it('renderiza el select con opciones', () => {
    render(
      <SelectComponent
        data={{ options: mockOptions, placeholder: 'Seleccionar...' }}
        $category="test"
        $element="select"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Seleccionar...')).toBeInTheDocument();
    expect(screen.getByText('Opción 1')).toBeInTheDocument();
  });

  it('maneja el cambio de valor', () => {
    const handleChange = jest.fn();
    render(
      <SelectComponent
        data={{ options: mockOptions }}
        onChange={handleChange}
        $category="test"
        $element="select"
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('respeta la propiedad disabled', () => {
    render(
      <SelectComponent
        data={{ options: mockOptions }}
        disabled={true}
        $category="test"
        $element="select"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'select',
        category: 'test',
        element: 'select',
        property: 'background',
        mobile_value: '#f0f0f0',
        desktop_value: '#ffffff',
      },
    ];

    render(
      <SelectComponent
        data={{ options: mockOptions, styles }}
        $category="test"
        $element="select"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renderiza opciones deshabilitadas', () => {
    const optionsWithDisabled: SelectOption[] = [
      { value: 'option1', label: 'Opción 1' },
      { value: 'option2', label: 'Opción 2 (deshabilitada)', disabled: true },
    ];

    render(
      <SelectComponent
        data={{ options: optionsWithDisabled }}
        $category="test"
        $element="select"
      />
    );

    const option2 = screen.getByText('Opción 2 (deshabilitada)');
    expect(option2).toHaveAttribute('disabled');
  });
});
