import { render, screen } from '@testing-library/react';
import { TextComponent } from './Text';

describe('TextComponent', () => {
  it('renderiza texto simple', () => {
    render(
      <TextComponent
        data={{ text: 'Hola Mundo' }}
      />
    );
    
    expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
  });

  it('renderiza con content_id', () => {
    render(
      <TextComponent
        data={{ content_id: 'hero_title' }}
        content={{ hero_title: 'Bienvenido' }}
      />
    );
    
    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
  });

  it('renderiza con múltiples content_ids', () => {
    render(
      <TextComponent
        data={{ content_ids: ['first', 'second', 'third'] }}
        content={{ first: 'Hello', second: 'Beautiful', third: 'World' }}
      />
    );
    
    expect(screen.getByText('Hello Beautiful World')).toBeInTheDocument();
  });

  it('renderiza con elemento HTML específico', () => {
    const { container } = render(
      <TextComponent
        data={{ text: 'Título' }}
        elementType="h1"
      />
    );
    
    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(screen.getByText('Título')).toBeInTheDocument();
  });

  it('usa el elemento desde data.element', () => {
    const { container } = render(
      <TextComponent
        data={{ text: 'Párrafo', element: 'p' }}
      />
    );
    
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renderiza con data como string', () => {
    render(
      <TextComponent
        data="simple_text"
        content={{ simple_text_txt: 'Texto Simple' }}
      />
    );
    
    expect(screen.getByText('Texto Simple')).toBeInTheDocument();
  });
});
