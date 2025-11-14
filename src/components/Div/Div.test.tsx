import { render, screen } from '@testing-library/react';
import { DivComponent } from './Div';

describe('DivComponent', () => {
  it('renderiza children correctamente', () => {
    render(
      <DivComponent>
        <span>Test Content</span>
      </DivComponent>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('aplica role y aria-label', () => {
    render(
      <DivComponent role="navigation" aria-label="Main Navigation">
        <span>Nav</span>
      </DivComponent>
    );
    
    const div = screen.getByRole('navigation');
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute('aria-label', 'Main Navigation');
  });

  it('aplica className', () => {
    const { container } = render(
      <DivComponent className="custom-class">
        Content
      </DivComponent>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
