import { render, screen, fireEvent } from '@testing-library/react';
import { InputComponent } from './Input';

describe('InputComponent', () => {
  it('renderiza con placeholder simple', () => {
    render(
      <InputComponent
        data={{ placeholder: 'Escribe aquí...' }}
      />
    );
    
    expect(screen.getByPlaceholderText('Escribe aquí...')).toBeInTheDocument();
  });

  it('renderiza con content_id', () => {
    render(
      <InputComponent
        data={{ content_id: 'search_input' }}
        content={{ search_input: 'Buscar productos' }}
      />
    );
    
    expect(screen.getByPlaceholderText('Buscar productos')).toBeInTheDocument();
  });

  it('maneja onChange', () => {
    const handleChange = jest.fn();
    
    render(
      <InputComponent
        data={{ placeholder: 'Buscar' }}
        onChange={handleChange}
      />
    );
    
    const input = screen.getByPlaceholderText('Buscar');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('respeta disabled', () => {
    render(
      <InputComponent
        data={{ placeholder: 'Disabled' }}
        disabled
      />
    );
    
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });

  it('aplica el tipo correcto', () => {
    render(
      <InputComponent
        data={{ placeholder: 'Email' }}
        type="email"
      />
    );
    
    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');
  });
});
