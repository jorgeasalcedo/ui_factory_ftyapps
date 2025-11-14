import React from 'react';
import { LinkComponentProps } from './Link.types';
import { StyledLink } from './Link.styled';
import { assertValidComponent } from '../../validators/componentValidator';

/**
 * LinkComponent - Enlace con estilos dinámicos
 * 
 * @example
 * ```tsx
 * <LinkComponent
 *   data={{ 
 *     href: '/productos',
 *     content_id: 'nav_products'
 *   }}
 *   content={{ nav_products: 'Productos' }}
 *   $category="nav"
 *   $element="link"
 * />
 * ```
 */
export const LinkComponent: React.FC<LinkComponentProps> = ({
  data,
  content,
  $category = 'global',
  $element = 'link',
  target,
  rel,
  onClick,
  className,
  children,
  ...rest
}) => {
  // Validación en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    assertValidComponent({ data, content, $category, $element }, 'LinkComponent');
  }

  // Resolver el texto del enlace
  const getLinkText = (): React.ReactNode => {
    if (children) return children;

    if (typeof content === 'string') return content;

    if (data.text) return data.text;

    if (data.content_id && content && typeof content === 'object') {
      return content[data.content_id];
    }

    return null;
  };

  const linkText = getLinkText();
  const href = data.href || '#';
  const linkTarget = target || data.target;
  
  // Si es target="_blank", agregar rel="noopener noreferrer" por seguridad
  const linkRel = linkTarget === '_blank' 
    ? rel || 'noopener noreferrer' 
    : rel;

  return (
    <StyledLink
      href={href}
      target={linkTarget}
      rel={linkRel}
      $category={$category}
      $element={$element}
      onClick={onClick}
      className={className}
      theme={data.styles ? { styles: data.styles } : undefined}
      {...rest}
    >
      {linkText}
    </StyledLink>
  );
};

LinkComponent.displayName = 'LinkComponent';
