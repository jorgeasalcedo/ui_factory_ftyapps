import { render, screen, fireEvent } from '@testing-library/react';
import { SpanComponent } from './Span';

describe('SpanComponent', () => {
  it('renderiza el span con texto', () => {
    render(
      <SpanComponent
        data={{ text: 'Test span' }}
        $category="test"
        $element="span"
      />
    );

    expect(screen.getByText('Test span')).toBeInTheDocument();
  });

  it('renderiza con children', () => {
    render(
      <SpanComponent data={{}} $category="test" $element="span">
        Custom content
      </SpanComponent>
    );

    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('maneja eventos onClick', () => {
    const handleClick = jest.fn();
    render(
      <SpanComponent
        data={{ text: 'Clickable span' }}
        onClick={handleClick}
        $category="test"
        $element="span"
      />
    );

    fireEvent.click(screen.getByText('Clickable span'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'span',
        category: 'test',
        element: 'span',
        property: 'color',
        mobile_value: '#ff0000',
        desktop_value: '#ff0000',
      },
    ];

    render(
      <SpanComponent
        data={{ text: 'Styled span', styles }}
        $category="test"
        $element="span"
      />
    );

    expect(screen.getByText('Styled span')).toBeInTheDocument();
  });
});
