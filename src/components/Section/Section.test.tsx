import { render, screen } from '@testing-library/react';
import { SectionComponent } from './Section';

describe('SectionComponent', () => {
  it('renderiza la sección con children', () => {
    render(
      <SectionComponent data={{}} $category="test" $element="section">
        <p>Section content</p>
      </SectionComponent>
    );

    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('aplica role de accesibilidad', () => {
    const { container } = render(
      <SectionComponent
        data={{}}
        role="region"
        aria-label="Main content"
        $category="test"
        $element="section"
      >
        <p>Content</p>
      </SectionComponent>
    );

    const section = container.querySelector('section');
    expect(section).toHaveAttribute('role', 'region');
    expect(section).toHaveAttribute('aria-label', 'Main content');
  });

  it('aplica estilos dinámicos', () => {
    const styles = [
      {
        component: 'section',
        category: 'test',
        element: 'section',
        property: 'padding',
        mobile_value: '1rem',
        desktop_value: '2rem',
      },
    ];

    const { container } = render(
      <SectionComponent
        data={{ styles }}
        $category="test"
        $element="section"
      >
        <p>Content</p>
      </SectionComponent>
    );

    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
