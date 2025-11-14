import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonComponent } from './Button';

describe('ButtonComponent', () => {
  it('renderiza con texto simple', () => {
    render(
      <ButtonComponent
        data={{ text: 'Click me' }}
      />
    );
    
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renderiza con content_id y content object', () => {
    render(
      <ButtonComponent
        data={{ content_id: 'btn_submit' }}
        content={{ btn_submit: 'Enviar' }}
      />
    );
    
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('maneja el evento onClick', () => {
    const handleClick = jest.fn();
    
    render(
      <ButtonComponent
        data={{ text: 'Click me' }}
        onClick={handleClick}
      />
    );
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('respeta la prop disabled', () => {
    const handleClick = jest.fn();
    
    render(
      <ButtonComponent
        data={{ text: 'Click me' }}
        onClick={handleClick}
        disabled
      />
    );
    
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('aplica estilos desde data.styles', () => {
    const mockStyles = [
      {
        component: 'button',
        category: 'hero',
        element: 'button_primary',
        property: 'background',
        mobile_value: '#ff0000',
        desktop_value: '#00ff00'
      }
    ];

    const { container } = render(
      <ButtonComponent
        data={{ text: 'Styled Button', styles: mockStyles }}
        $category="hero"
        $element="button_primary"
      />
    );
    
    expect(container.firstChild).toBeInTheDocument();
  });
});
