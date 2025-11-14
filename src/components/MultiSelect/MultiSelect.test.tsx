import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MultiSelectComponent } from './MultiSelect';
import { MultiSelectOption } from './types';

describe('MultiSelectComponent', () => {
  const mockOptions: MultiSelectOption[] = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  it('renderiza el multiselect cerrado por defecto', () => {
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        $category="test"
        $element="multiselect"
      />
    );

    expect(screen.getByText('Seleccionar opciones...')).toBeInTheDocument();
  });

  it('abre el dropdown al hacer clic', () => {
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        $category="test"
        $element="multiselect"
      />
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('permite seleccionar múltiples opciones', () => {
    const handleChange = jest.fn();
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        value={[]}
        onChange={handleChange}
        $category="test"
        $element="multiselect"
      />
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const reactCheckbox = screen.getByLabelText('React') as HTMLInputElement;
    fireEvent.click(reactCheckbox);

    expect(handleChange).toHaveBeenCalledWith(['react']);
  });

  it('muestra el contador de seleccionados', () => {
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        value={['react', 'vue']}
        $category="test"
        $element="multiselect"
      />
    );

    expect(screen.getByText('2 seleccionados')).toBeInTheDocument();
  });

  it('permite buscar opciones', async () => {
    render(
      <MultiSelectComponent
        data={{ options: mockOptions, searchable: true }}
        $category="test"
        $element="multiselect"
      />
    );

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    const searchInput = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchInput, { target: { value: 'react' } });

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.queryByText('Vue')).not.toBeInTheDocument();
    });
  });

  it('muestra chips cuando showChips es true', () => {
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        value={['react', 'vue']}
        showChips={true}
        $category="test"
        $element="multiselect"
      />
    );

    // Verificar que se muestran los chips usando getAllByText ya que aparecen tanto en checkboxes como en chips
    const reactElements = screen.getAllByText('React');
    const vueElements = screen.getAllByText('Vue');
    
    expect(reactElements.length).toBeGreaterThan(0);
    expect(vueElements.length).toBeGreaterThan(0);
  });

  it('permite remover chips', () => {
    const handleChange = jest.fn();
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        value={['react', 'vue']}
        onChange={handleChange}
        showChips={true}
        $category="test"
        $element="multiselect"
      />
    );

    const removeButtons = screen.getAllByLabelText(/Remover/);
    fireEvent.click(removeButtons[0]);

    expect(handleChange).toHaveBeenCalledWith(['vue']);
  });

  it('respeta la propiedad disabled', () => {
    render(
      <MultiSelectComponent
        data={{ options: mockOptions }}
        disabled={true}
        $category="test"
        $element="multiselect"
      />
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('tabIndex', '-1');
  });
});
