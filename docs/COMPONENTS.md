# 🎉 Componentes Migrados - UI Factory

## ✅ Componentes Completados (6/6)

### 1. **ButtonComponent** ✅
- ✨ Props: data, content, $category, $element, onClick, disabled, type
- 🎨 Estilos dinámicos con estados (hover, active, focus)
- 🧪 Tests: 5/5 pasando
- 📝 Documentación JSDoc completa

**Uso:**
```tsx
<ButtonComponent
  data={{ content_id: 'btn_cta' }}
  content={{ btn_cta: 'Comprar' }}
  $category="hero"
  $element="button_primary"
  onClick={() => console.log('Click!')}
/>
```

---

### 2. **TextComponent** ✅
- ✨ Props: data, content, $category, $element, elementType, onClick
- 📝 Soporta: h1, h2, h3, h4, h5, h6, p, span, label, div
- 🔤 Múltiples content_ids para concatenar texto
- 🧪 Tests: 6/6 pasando

**Uso:**
```tsx
<TextComponent
  data={{ text: 'Título Principal' }}
  elementType="h1"
  $category="hero"
  $element="title"
/>
```

---

### 3. **InputComponent** ✅
- ✨ Props: data, content, $category, $element, type, placeholder, onChange, value
- 🔤 Tipos: text, email, password, number, tel, url, search
- ✅ Validación automática
- 🧪 Tests: 5/5 pasando

**Uso:**
```tsx
<InputComponent
  data={{ content_id: 'search_placeholder' }}
  content={{ search_placeholder: 'Buscar productos...' }}
  type="search"
  $category="search"
  $element="input_search"
  onChange={(e) => handleSearch(e.target.value)}
/>
```

---

### 4. **ImageComponent** ✅
- ✨ Props: data, $category, $element, alt, loading, width, height
- 🖼️ Lazy loading por defecto
- 📐 Width y height opcionales
- 🧪 Tests: 4/4 pasando

**Uso:**
```tsx
<ImageComponent
  data={{ src: '/images/logo.png', alt: 'Logo' }}
  $category="header"
  $element="logo"
  loading="lazy"
/>
```

---

### 5. **LinkComponent** ✅
- ✨ Props: data, content, $category, $element, target, rel, onClick
- 🔗 Target: _blank, _self, _parent, _top
- 🔒 Seguridad automática para _blank (noopener noreferrer)
- 🧪 Tests: 5/5 pasando

**Uso:**
```tsx
<LinkComponent
  data={{ 
    href: '/productos',
    content_id: 'nav_products'
  }}
  content={{ nav_products: 'Productos' }}
  $category="nav"
  $element="link"
/>
```

---

### 6. **DivComponent** ✅
- ✨ Props: data, $category, $element, children, role, aria-label
- 📦 Contenedor flexible
- ♿ Roles ARIA para accesibilidad
- 🧪 Tests: 3/3 pasando

**Uso:**
```tsx
<DivComponent
  $category="hero"
  $element="container"
  role="region"
  aria-label="Hero Section"
>
  <TextComponent data={{ text: 'Contenido' }} />
  <ButtonComponent data={{ text: 'CTA' }} />
</DivComponent>
```

---

## 📊 Resumen

| Componente | Tests | Líneas | Estado |
|------------|-------|--------|--------|
| ButtonComponent | 5/5 ✅ | ~60 | ✅ Completo |
| TextComponent | 6/6 ✅ | ~100 | ✅ Completo |
| InputComponent | 5/5 ✅ | ~75 | ✅ Completo |
| ImageComponent | 4/4 ✅ | ~50 | ✅ Completo |
| LinkComponent | 5/5 ✅ | ~80 | ✅ Completo |
| DivComponent | 3/3 ✅ | ~45 | ✅ Completo |
| **Total** | **28/28** ✅ | **~410** | **✅ Listo** |

---

## 🎨 Sistema de Estilos Dinámicos

Todos los componentes soportan estilos desde la BD con:

### Estructura de Estilos
```typescript
{
  component: 'button',      // Tipo de componente
  category: 'hero',          // Categoría (hero, products, footer, etc.)
  element: 'button_primary', // Elemento específico
  property: 'background',    // Propiedad CSS
  mobile_value: '#8A2BE2',   // Valor para mobile
  desktop_value: '#8A2BE2'   // Valor para desktop
}
```

### Estados Soportados
- ✅ **Normal**: `property: 'background'`
- ✅ **Hover**: `property: 'hover-background'`
- ✅ **Active**: `property: 'active-background'`
- ✅ **Focus**: `property: 'focus-background'`

### Tokens de Variables
```javascript
// Definir tokens globales
window.__SITE_THEME = {
  'primary-color': '#8A2BE2',
  'primary-color-dark': '#6A1BC2',
  'secondary-color': '#FF6B6B',
  'text-primary': '#333333',
  'text-secondary': '#666666',
  'background': '#FFFFFF',
  'spacing-sm': '8px',
  'spacing-md': '16px',
  'spacing-lg': '24px',
};

// Usar en estilos
{
  property: 'background',
  mobile_value: '@primary-color', // Se reemplaza por #8A2BE2
  desktop_value: '@primary-color'
}
```

---

## ✅ Validación Automática

Todos los componentes incluyen validación en desarrollo:

```typescript
// Se ejecuta automáticamente en NODE_ENV !== 'production'
assertValidComponent(
  { data, content, $category, $element },
  'ComponentName'
);

// Errores descriptivos si las props son inválidas
// ❌ La prop "data" es requerida
// ❌ El contenido debe ser un string o un objeto
// ❌ Los estilos deben ser un array
```

---

## 📦 Exports del Index

```typescript
// Componentes
export { 
  ButtonComponent,
  TextComponent,
  InputComponent,
  ImageComponent,
  LinkComponent,
  DivComponent
};

// Tipos
export type {
  ButtonComponentProps,
  TextComponentProps,
  InputComponentProps,
  ImageComponentProps,
  LinkComponentProps,
  DivComponentProps,
  StyleItem,
  ThemeStyles,
  StyledBaseProps,
  BaseComponentProps
};

// Utilidades
export {
  replaceVariables,
  generateCSSRules,
  kebabToCamel,
  camelToKebab,
  getEmotionStyle,
  objectToCssString
};

// Validadores
export {
  validateComponent,
  assertValidComponent
};
```

---

## 🚀 Uso en Proyectos

### Opción 1: npm link
```bash
# En ui_factory
cd /Users/jorgealexandersalcedoalvarez/Desktop/infras_genericas/ui_factory
npm link

# En tu proyecto
cd /Users/jorgealexandersalcedoalvarez/Desktop/buenatucompra/storeuniqueforall_front
npm link @buenatucompra/ui-factory
```

### Opción 2: Instalación local
```bash
npm install ../../../infras_genericas/ui_factory
```

---

## 🔄 Próximos Componentes (Futuro)

- [ ] **ProductCard** - Tarjeta de producto
- [ ] **SliderComponent** - Carrusel
- [ ] **ButtonNavComponent** - Navegación
- [ ] **ImageLoader** - Carga progresiva
- [ ] **SelectComponent** - Select/dropdown
- [ ] **CheckboxComponent** - Checkbox
- [ ] **RadioComponent** - Radio button
- [ ] **FormComponent** - Formulario completo

---

## 🎉 Estado Final

- ✅ **6 componentes** migrados y funcionando
- ✅ **28 tests** pasando (100% success)
- ✅ **TypeScript** sin errores
- ✅ **Build** exitoso (CJS + ESM)
- ✅ **Documentación** completa
- ✅ **Listo para producción** 🚀
