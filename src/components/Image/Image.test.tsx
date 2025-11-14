import { render, screen } from '@testing-library/react';
import { ImageComponent } from './Image';

describe('ImageComponent', () => {
  it('renderiza con src y alt', () => {
    render(
      <ImageComponent
        data={{ src: '/test.jpg', alt: 'Test Image' }}
      />
    );
    
    const img = screen.getByAltText('Test Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('usa lazy loading por defecto', () => {
    render(
      <ImageComponent
        data={{ src: '/test.jpg' }}
      />
    );
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('respeta loading eager', () => {
    render(
      <ImageComponent
        data={{ src: '/test.jpg' }}
        loading="eager"
      />
    );
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('aplica width y height', () => {
    render(
      <ImageComponent
        data={{ src: '/test.jpg' }}
        width={200}
        height={100}
      />
    );
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '200');
    expect(img).toHaveAttribute('height', '100');
  });
});
