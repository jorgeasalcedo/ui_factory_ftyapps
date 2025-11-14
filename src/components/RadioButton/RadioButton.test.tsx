import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButtonComponent } from './RadioButton';
import { RadioOption } from './types';

describe('RadioButtonComponent', () => {
  const mockOptions: RadioOption[] = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];

  it('renderiza el grupo de radio buttons', () => {
    render(
      <RadioButtonComponent
        data={{ options: mockOptions, name: 'test-radio' }}
        $category="test"
        $element="radio"
      />
    );

    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toBeInTheDocument();
    expect(screen.getByText('Opción 1')).toBeInTheDocument();
    expect(screen.getByText('Opción 2')).toBeInTheDocument();
    expect(screen.getByText('Opción 3')).toBeInTheDocument();
  });

  it('maneja la selección de opciones', () => {
    const handleChange = jest.fn();
    render(
      <RadioButtonComponent
        data={{ options: mockOptions, name: 'test-radio' }}
        onChange={handleChange}
        $category="test"
        $element="radio"
      />
    );

    const radio2 = screen.getByLabelText('Opción 2') as HTMLInputElement;
    fireEvent.click(radio2);
    expect(handleChange).toHaveBeenCalled();
  });

  it('respeta la propiedad disabled global', () => {
    render(
      <RadioButtonComponent
        data={{ options: mockOptions, name: 'test-radio' }}
        disabled={true}
        $category="test"
        $element="radio"
      />
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  it('maneja orientación horizontal', () => {
    const { container } = render(
      <RadioButtonComponent
        data={{ options: mockOptions, name: 'test-radio' }}
        orientation="horizontal"
        $category="test"
        $element="radio"
      />
    );

    const radioGroup = container.firstChild as HTMLElement;
    expect(radioGroup).toHaveStyle({ flexDirection: 'row' });
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'radio',
        category: 'test',
        element: 'radio',
        property: 'color',
        mobile_value: '#007bff',
        desktop_value: '#0056b3',
      },
    ];

    render(
      <RadioButtonComponent
        data={{ options: mockOptions, name: 'test-radio', styles }}
        $category="test"
        $element="radio"
      />
    );

    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toBeInTheDocument();
  });

  it('marca la opción seleccionada', () => {
    render(
      <RadioButtonComponent
        data={{ options: mockOptions, name: 'test-radio' }}
        value="option2"
        $category="test"
        $element="radio"
      />
    );

    const radio2 = screen.getByLabelText('Opción 2') as HTMLInputElement;
    expect(radio2).toBeChecked();
  });
});
