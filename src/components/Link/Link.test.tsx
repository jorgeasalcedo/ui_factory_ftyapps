import { render, screen, fireEvent } from '@testing-library/react';
import { LinkComponent } from './Link';

describe('LinkComponent', () => {
  it('renderiza con href y texto', () => {
    render(
      <LinkComponent
        data={{ href: '/test', text: 'Test Link' }}
      />
    );
    
    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renderiza con content_id', () => {
    render(
      <LinkComponent
        data={{ href: '/home', content_id: 'nav_home' }}
        content={{ nav_home: 'Inicio' }}
      />
    );
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
  });

  it('aplica target="_blank" con rel correcto', () => {
    render(
      <LinkComponent
        data={{ href: 'https://example.com', text: 'External' }}
        target="_blank"
      />
    );
    
    const link = screen.getByText('External');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('maneja onClick', () => {
    const handleClick = jest.fn();
    
    render(
      <LinkComponent
        data={{ href: '#', text: 'Click Me' }}
        onClick={handleClick}
      />
    );
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renderiza children cuando se proporciona', () => {
    render(
      <LinkComponent data={{ href: '/test' }}>
        <span>Custom Content</span>
      </LinkComponent>
    );
    
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });
});
