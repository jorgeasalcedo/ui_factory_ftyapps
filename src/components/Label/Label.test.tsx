import { render, screen } from '@testing-library/react';
import { LabelComponent } from './Label';

describe('LabelComponent', () => {
  it('renderiza el label con texto', () => {
    render(
      <LabelComponent
        data={{ text: 'Nombre completo' }}
        $category="test"
        $element="label"
      />
    );

    expect(screen.getByText('Nombre completo')).toBeInTheDocument();
  });

  it('renderiza con children', () => {
    render(
      <LabelComponent data={{}} $category="test" $element="label">
        Custom Label Content
      </LabelComponent>
    );

    expect(screen.getByText('Custom Label Content')).toBeInTheDocument();
  });

  it('asocia correctamente con htmlFor', () => {
    render(
      <LabelComponent
        data={{ text: 'Email' }}
        htmlFor="email-input"
        $category="test"
        $element="label"
      />
    );

    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('for', 'email-input');
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'label',
        category: 'test',
        element: 'label',
        property: 'color',
        mobile_value: '#007bff',
        desktop_value: '#007bff',
      },
    ];

    render(
      <LabelComponent
        data={{ text: 'Test Label', styles }}
        $category="test"
        $element="label"
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});
