import { render, screen, fireEvent } from '@testing-library/react';
import { FormComponent } from './Form';

describe('FormComponent', () => {
  it('renderiza el formulario con children', () => {
    render(
      <FormComponent data={{}} $category="test" $element="form">
        <input type="text" placeholder="Test input" />
      </FormComponent>
    );

    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('maneja el submit', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(
      <FormComponent
        data={{}}
        onSubmit={handleSubmit}
        $category="test"
        $element="form"
      >
        <button type="submit">Submit</button>
      </FormComponent>
    );

    const button = screen.getByText('Submit');
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'form',
        category: 'test',
        element: 'form',
        property: 'padding',
        mobile_value: '1rem',
        desktop_value: '2rem',
      },
    ];

    const { container } = render(
      <FormComponent data={{ styles }} $category="test" $element="form">
        <div>Form content</div>
      </FormComponent>
    );

    expect(container.querySelector('form')).toBeInTheDocument();
  });
});
