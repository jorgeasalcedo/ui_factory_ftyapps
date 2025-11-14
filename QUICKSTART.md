# Guía de Inicio Rápido - UI Factory

## 🚀 Instalación de Dependencias

```bash
cd /Users/jorgealexandersalcedoalvarez/Desktop/infras_genericas/ui_factory
npm install
```

## 📦 Build

```bash
# Build para producción
npm run build

# Modo desarrollo (watch)
npm run dev
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm run test:watch
```

## 📚 Uso en Otros Proyectos

### Opción 1: Usar npm link (Desarrollo Local)

```bash
# En el directorio ui_factory
npm link

# En tu proyecto (storeuniqueforall_front por ejemplo)
cd /Users/jorgealexandersalcedoalvarez/Desktop/buenatucompra/storeuniqueforall_front
npm link @buenatucompra/ui-factory
```

### Opción 2: Instalar desde ruta local

```bash
cd /Users/jorgealexandersalcedoalvarez/Desktop/buenatucompra/storeuniqueforall_front

# Agregar al package.json
npm install ../../../infras_genericas/ui_factory
```

### Opción 3: Publicar en registro privado

Si tienes un registro npm privado (como Verdaccio, GitHub Packages, etc.):

```bash
# En el directorio ui_factory
npm publish
```

## 💻 Ejemplo de Uso

```tsx
import { ButtonComponent, TextComponent } from '@buenatucompra/ui-factory';

function MyComponent() {
  // Datos de ejemplo (normalmente vendrían de la BD)
  const styles = [
    {
      component: 'button',
      category: 'hero',
      element: 'button_primary',
      property: 'background',
      mobile_value: '#8A2BE2',
      desktop_value: '#8A2BE2'
    },
    {
      component: 'button',
      category: 'hero',
      element: 'button_primary',
      property: 'hover-background',
      mobile_value: '#6A1BC2',
      desktop_value: '#6A1BC2'
    }
  ];

  return (
    <div>
      <TextComponent
        data={{ text: 'Bienvenido a BuenaTuCompra' }}
        elementType="h1"
        $category="hero"
        $element="title"
      />

      <ButtonComponent
        data={{ 
          content_id: 'btn_cta',
          styles: styles 
        }}
        content={{ btn_cta: 'Comprar Ahora' }}
        $category="hero"
        $element="button_primary"
        onClick={() => console.log('Click!')}
      />
    </div>
  );
}
```

## 🎨 Sistema de Estilos

Los componentes reciben estilos dinámicamente a través de la prop `data.styles`:

```typescript
const styles = [
  {
    component: 'button',      // Tipo de componente
    category: 'hero',          // Categoría (hero, products, footer, etc.)
    element: 'button_primary', // Elemento específico
    property: 'background',    // Propiedad CSS
    mobile_value: '#8A2BE2',   // Valor para mobile
    desktop_value: '#8A2BE2'   // Valor para desktop
  }
];
```

### Estados Soportados

- **Normal**: `property: 'background'`
- **Hover**: `property: 'hover-background'`
- **Active**: `property: 'active-background'`
- **Focus**: `property: 'focus-background'`

### Tokens de Variables

Los estilos pueden usar tokens que serán reemplazados:

```typescript
{
  property: 'background',
  mobile_value: '@primary-color',
  desktop_value: '@primary-color'
}
```

Los tokens se definen en `window.__SITE_THEME`:

```javascript
window.__SITE_THEME = {
  'primary-color': '#8A2BE2',
  'primary-color-dark': '#6A1BC2',
  'spacing-md': '16px',
  // ...
};
```

## 🔧 Configuración del Theme

Para inyectar el theme en tu aplicación:

```tsx
// En tu App.tsx o index.tsx
useEffect(() => {
  // Cargar theme desde la BD o API
  const theme = {
    'primary-color': '#8A2BE2',
    'secondary-color': '#FF6B6B',
    'text-primary': '#333333',
    'background': '#FFFFFF',
  };

  (window as any).__SITE_THEME = theme;
}, []);
```

## 📝 Próximos Componentes a Migrar

- [ ] InputComponent
- [ ] ImageComponent
- [ ] ImageLoader
- [ ] LinkComponent
- [ ] DivComponent (Container)
- [ ] SliderComponent
- [ ] ButtonNavComponent
- [ ] ProductCard

## 🐛 Validación en Desarrollo

Los componentes incluyen validación automática en modo desarrollo:

```typescript
// Se ejecuta automáticamente en desarrollo
// Lanza errores descriptivos si las props son inválidas
<ButtonComponent data={invalidData} /> // ❌ Error claro en consola
```

## 🧪 Testing

Cada componente incluye tests completos:

```bash
# Ver cobertura
npm test -- --coverage

# Test de un componente específico
npm test -- Button.test.tsx
```

## 📖 Documentación Completa

Ver [README.md](./README.md) para documentación completa.
