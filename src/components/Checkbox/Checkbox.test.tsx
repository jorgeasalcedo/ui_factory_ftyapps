import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxComponent } from './Checkbox';

describe('CheckboxComponent', () => {
  it('renderiza el checkbox con label', () => {
    render(
      <CheckboxComponent
        data={{ label: 'Acepto términos y condiciones', value: 'terms' }}
        $category="test"
        $element="checkbox"
      />
    );

    expect(screen.getByText('Acepto términos y condiciones')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('maneja el cambio de estado', () => {
    const handleChange = jest.fn();
    render(
      <CheckboxComponent
        data={{ label: 'Test checkbox', value: 'test' }}
        onChange={handleChange}
        $category="test"
        $element="checkbox"
      />
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('respeta la propiedad checked', () => {
    render(
      <CheckboxComponent
        data={{ label: 'Test checkbox', value: 'test' }}
        checked={true}
        $category="test"
        $element="checkbox"
      />
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox).toBeChecked();
  });

  it('respeta la propiedad disabled', () => {
    render(
      <CheckboxComponent
        data={{ label: 'Test checkbox', value: 'test' }}
        disabled={true}
        $category="test"
        $element="checkbox"
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'checkbox',
        category: 'test',
        element: 'checkbox',
        property: 'accent-color',
        mobile_value: '#667eea',
        desktop_value: '#667eea',
      },
    ];

    render(
      <CheckboxComponent
        data={{ label: 'Test checkbox', value: 'test', styles }}
        $category="test"
        $element="checkbox"
      />
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
