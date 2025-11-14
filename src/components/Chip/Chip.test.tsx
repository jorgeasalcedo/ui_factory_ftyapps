import { render, screen, fireEvent } from '@testing-library/react';
import { ChipComponent } from './Chip';

describe('ChipComponent', () => {
  it('renderiza el chip con label', () => {
    render(
      <ChipComponent
        data={{ label: 'React' }}
        $category="test"
        $element="chip"
      />
    );

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('muestra el botón de remover cuando removable es true', () => {
    render(
      <ChipComponent
        data={{ label: 'React' }}
        removable={true}
        $category="test"
        $element="chip"
      />
    );

    expect(screen.getByLabelText('Remover React')).toBeInTheDocument();
  });

  it('llama a onRemove al hacer clic en el botón de remover', () => {
    const handleRemove = jest.fn();
    render(
      <ChipComponent
        data={{ label: 'React' }}
        removable={true}
        onRemove={handleRemove}
        $category="test"
        $element="chip"
      />
    );

    const removeButton = screen.getByLabelText('Remover React');
    fireEvent.click(removeButton);

    expect(handleRemove).toHaveBeenCalled();
  });

  it('llama a onClick al hacer clic en el chip', () => {
    const handleClick = jest.fn();
    render(
      <ChipComponent
        data={{ label: 'React' }}
        onClick={handleClick}
        $category="test"
        $element="chip"
      />
    );

    const chip = screen.getByRole('button');
    fireEvent.click(chip);

    expect(handleClick).toHaveBeenCalled();
  });

  it('aplica diferentes variantes de color', () => {
    const { rerender } = render(
      <ChipComponent
        data={{ label: 'Primary', variant: 'primary' }}
        $category="test"
        $element="chip"
      />
    );

    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(
      <ChipComponent
        data={{ label: 'Success', variant: 'success' }}
        $category="test"
        $element="chip"
      />
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('aplica diferentes tamaños', () => {
    const { container } = render(
      <ChipComponent
        data={{ label: 'Small' }}
        size="small"
        $category="test"
        $element="chip"
      />
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renderiza con icono', () => {
    const icon = <span data-testid="icon">🔥</span>;
    render(
      <ChipComponent
        data={{ label: 'Hot' }}
        icon={icon}
        $category="test"
        $element="chip"
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Hot')).toBeInTheDocument();
  });
});
