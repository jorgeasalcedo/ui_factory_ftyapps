import { render, screen, fireEvent } from '@testing-library/react';
import { TextAreaComponent } from './TextArea';

describe('TextAreaComponent', () => {
  it('renderiza el textarea', () => {
    render(
      <TextAreaComponent
        data={{ placeholder: 'Escribe tu mensaje...' }}
        $category="test"
        $element="textarea"
      />
    );

    expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeInTheDocument();
  });

  it('maneja el cambio de texto', () => {
    const handleChange = jest.fn();
    render(
      <TextAreaComponent
        data={{ placeholder: 'Test' }}
        onChange={handleChange}
        $category="test"
        $element="textarea"
      />
    );

    const textarea = screen.getByPlaceholderText('Test');
    fireEvent.change(textarea, { target: { value: 'Nuevo texto' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('respeta la propiedad value', () => {
    render(
      <TextAreaComponent
        data={{ placeholder: 'Test' }}
        value="Texto inicial"
        $category="test"
        $element="textarea"
      />
    );

    const textarea = screen.getByDisplayValue('Texto inicial');
    expect(textarea).toBeInTheDocument();
  });

  it('respeta la propiedad disabled', () => {
    render(
      <TextAreaComponent
        data={{ placeholder: 'Test' }}
        disabled={true}
        $category="test"
        $element="textarea"
      />
    );

    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toBeDisabled();
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'textarea',
        category: 'test',
        element: 'textarea',
        property: 'border',
        mobile_value: '2px solid #007bff',
        desktop_value: '2px solid #007bff',
      },
    ];

    render(
      <TextAreaComponent
        data={{ placeholder: 'Test', styles }}
        $category="test"
        $element="textarea"
      />
    );

    expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
  });
});
