import React from 'react';
import { ImageComponentProps } from './Image.types';
import { StyledImage } from './Image.styled';
import { assertValidComponent } from '../../validators/componentValidator';

/**
 * ImageComponent - Imagen optimizada con estilos dinámicos
 * 
 * @example
 * ```tsx
 * <ImageComponent
 *   data={{ src: '/images/logo.png', alt: 'Logo' }}
 *   $category="header"
 *   $element="logo"
 *   loading="lazy"
 * />
 * ```
 */
export const ImageComponent: React.FC<ImageComponentProps> = ({
  data,
  $category = 'global',
  $element = 'image',
  alt: altProp,
  loading = 'lazy',
  width,
  height,
  className,
  ...rest
}) => {
  // Validación en desarrollo
  if (process.env.NODE_ENV !== 'production') {
    assertValidComponent({ data, $category, $element }, 'ImageComponent');
  }

  const src = data.src;
  const alt = altProp || data.alt || '';

  if (!src) {
    console.warn('ImageComponent: src is required');
    return null;
  }

  return (
    <StyledImage
      src={src}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      $category={$category}
      $element={$element}
      className={className}
      theme={data.styles ? { styles: data.styles } : undefined}
      {...rest}
    />
  );
};

ImageComponent.displayName = 'ImageComponent';
