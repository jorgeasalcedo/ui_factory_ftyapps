# @ftyapps/ui-factory

> Sistema de componentes React con estilos dinámicos desde base de datos y comportamientos flexibles

[![NPM Version](https://img.shields.io/npm/v/@ftyapps/ui-factory.svg)](https://www.npmjs.com/package/@ftyapps/ui-factory)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-78%20passing-brightgreen.svg)](./docs/COMPONENTS.md)

Una librería moderna de componentes React diseñada para aplicaciones que requieren estilos dinámicos controlados desde base de datos, con soporte completo para mobile/desktop y temas personalizables.

---

## ✨ Características

🎨 **16 Componentes** - Base HTML + Componentes híbridos avanzados  
✅ **78 Tests** - Cobertura completa con Jest y React Testing Library  
💾 **Estilos Dinámicos** - Sistema de estilos desde MySQL con breakpoints  
📱 **Responsive** - Mobile/Desktop con valores específicos  
🎭 **Temas** - Soporte para light/dark y temas personalizados  
⚡ **TypeScript** - Strict mode con tipos completos  
💅 **Styled Components** - CSS-in-JS con performance optimizada  
♿ **Accesible** - ARIA labels, roles y navegación por teclado  

---

## 📦 Instalación

```bash
npm install @ftyapps/ui-factory
# o
yarn add @ftyapps/ui-factory
# o
pnpm add @ftyapps/ui-factory
```

## 🚀 Inicio Rápido

```tsx
import { ButtonComponent, MultiSelectComponent, ChipComponent } from '@ftyapps/ui-factory';

function App() {
  return (
    <>
      <ButtonComponent
        data={{ text: "Click me" }}
        onClick={() => console.log('clicked')}
        $category="hero"
        $element="button_primary"
      />
      
      <MultiSelectComponent
        data={{ options: [
          { value: 'react', label: 'React' },
          { value: 'vue', label: 'Vue' }
        ]}}
        showChips={true}
        searchable={true}
        $category="filters"
        $element="tech_selector"
      />
    </>
  );
}
```

Ver más ejemplos en [Guía de Inicio Rápido](./docs/QUICKSTART.md)

---

## 📚 Documentación

### Guías Principales
- [🚀 Guía de Inicio Rápido](./docs/QUICKSTART.md) - Comienza en 5 minutos
- [📖 Lista de Componentes](./docs/COMPONENTS.md) - Catálogo completo con ejemplos
- [🔀 Componentes Híbridos](./docs/HYBRID_COMPONENTS.md) - MultiSelect y Chips avanzados
- [🛠️ API Reference](./docs/PROJECT_SUMMARY.md) - Documentación técnica completa

### Para Desarrolladores
- [🤝 Guía de Contribución](./docs/CONTRIBUTING.md) - Cómo contribuir al proyecto
- [🌐 Setup de GitHub](./docs/GITHUB_SETUP.md) - Configuración del repositorio
- [📦 Migración Completa](./docs/MIGRATION_COMPLETE.md) - Historial de migración

---

## 🧩 Componentes Disponibles

### Formularios (6)
`Button` • `Input` • `TextArea` • `Select` • `RadioButton` • `Checkbox`

### Contenedores (3)
`Div` • `Form` • `Section`

### Texto (3)
`Text` • `Label` • `Span`

### Media (2)
`Link` • `Image`

### Híbridos (2)
`MultiSelect` • `Chip`

**Total: 16 componentes** con 78 tests unitarios

Ver [Documentación Completa de Componentes](./docs/COMPONENTS.md)

---

## 💡 Características Únicas

### Sistema de Estilos Dinámicos

Los estilos se cargan desde base de datos MySQL, permitiendo cambios en tiempo real sin redespliegue:

```tsx
// Los estilos vienen de la BD con esta estructura
{
  component: 'button',
  category: 'hero',
  element: 'button_primary',
  property: 'background',
  mobile_value: '#667eea',
  desktop_value: '#764ba2',
  state: 'hover'
}
```

### Breakpoints Responsive

Valores específicos para mobile y desktop:

```tsx
<ButtonComponent
  data={{
    text: "Responsive Button",
    styles: [{
      property: 'padding',
      mobile_value: '0.5rem 1rem',
      desktop_value: '0.75rem 2rem'
    }]
  }}
/>
```

### Estados Dinámicos

Soporte para `normal`, `hover`, `active`, `focus`:

```tsx
// Cada estado puede tener estilos diferentes desde la BD
styles: [
  { state: 'normal', property: 'background', value: '#667eea' },
  { state: 'hover', property: 'background', value: '#764ba2' }
]
```

---

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Verificar tipos
npm run typecheck

# Build de producción
npm run build
```

**Cobertura actual:** 78 tests pasando ✅

---

## 🏗️ Arquitectura

```
ui_factory/
├── src/
│   ├── components/          # 16 componentes
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.styled.ts
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── types/              # Tipos globales
│   ├── utils/              # Utilidades
│   └── validators/         # Validadores
├── demo/                   # Demo HTML interactivo
├── docs/                   # Documentación completa
└── dist/                   # Build de producción
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee nuestra [Guía de Contribución](./docs/CONTRIBUTING.md) antes de enviar un PR.

### Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/ftyapps/ui_factory_ftyapps.git
cd ui_factory_ftyapps

# Instalar dependencias
npm install

# Ejecutar tests
npm test

# Build
npm run build
```

---

## 📝 Roadmap

- [ ] DatePicker component
- [ ] Modal/Dialog component
- [ ] Dropdown Menu
- [ ] Toast/Notification system
- [ ] Tooltip component
- [ ] Pagination component
- [ ] Tabs component
- [ ] Accordion component
- [ ] Progress Bar
- [ ] Badge component

---

## 📄 Licencia

MIT © [FTYApps](https://github.com/ftyapps)

Ver [LICENSE](./LICENSE) para más detalles.

---

## 🔗 Enlaces

- [GitHub](https://github.com/ftyapps/ui_factory_ftyapps)
- [NPM Package](https://www.npmjs.com/package/@ftyapps/ui-factory)
- [Documentación](./docs/)
- [Issues](https://github.com/ftyapps/ui_factory_ftyapps/issues)
- [Changelog](./docs/MIGRATION_COMPLETE.md)

---

## 💬 Soporte

- 🐛 [Reportar un bug](https://github.com/ftyapps/ui_factory_ftyapps/issues/new?labels=bug)
- 💡 [Solicitar una funcionalidad](https://github.com/ftyapps/ui_factory_ftyapps/issues/new?labels=enhancement)
- 📧 Email: dev@ftyapps.com

---

**Hecho con ❤️ por el equipo de FTYApps**

function App() {
  return (
    <div>
      <TextComponent 
        data={{ text: "Hola Mundo" }}
        $category="hero"
        $element="title"
      />
      
      <ButtonComponent
        data={{ content_id: "btn_cta" }}
        content={{ btn_cta: "Click aquí" }}
        $category="hero"
        $element="button_primary"
        onClick={() => console.log('clicked')}
      />
    </div>
  );
}
```

## 🏗️ Arquitectura

El sistema está diseñado siguiendo el **Principio de Única Responsabilidad**:

```
ui_factory/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Button/
│   │   ├── Text/
│   │   ├── Input/
│   │   └── ...
│   ├── styles/              # Styled Components
│   ├── utils/               # Utilidades (themeHelpers, CSS generators)
│   ├── types/               # TypeScript definitions
│   ├── validators/          # Sistema de validación
│   └── index.ts             # Punto de entrada
├── tests/                   # Tests unitarios
└── stories/                 # Storybook stories
```

## 🎨 Sistema de Estilos

Los estilos se obtienen dinámicamente desde la base de datos y soportan:

- **Breakpoints**: mobile/desktop
- **Estados**: normal, hover, active, focus
- **Tokens**: variables reutilizables (@primary-color, @spacing-md)
- **Pseudo-elementos**: before, after

```typescript
// Ejemplo de estructura de estilos
const styles = [
  {
    component: "button",
    category: "hero",
    element: "button_primary",
    property: "background",
    mobile_value: "@primary-color",
    desktop_value: "@primary-color"
  },
  {
    component: "button",
    category: "hero",
    element: "button_primary",
    property: "hover-background",
    mobile_value: "@primary-color-dark",
    desktop_value: "@primary-color-dark"
  }
];
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Generar reporte de cobertura
npm test -- --coverage
```

## 📖 Storybook

```bash
# Iniciar Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 🔧 Desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo (watch)
npm run dev

# Build para producción
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📝 Convenciones

### Estructura de Componentes

Cada componente sigue esta estructura:

```
ComponentName/
├── ComponentName.tsx          # Componente principal
├── ComponentName.styled.tsx   # Styled components
├── ComponentName.types.ts     # TypeScript types
├── ComponentName.test.tsx     # Tests
└── ComponentName.stories.tsx  # Storybook stories
```

### Reglas de Desarrollo

1. **Ningún componente debe tener más de 60 líneas efectivas**
2. **Los types deben estar en archivos separados**
3. **Los estilos vienen de la base de datos**
4. **Usar componentes de la factory, no HTML directo**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT © ftyapps Team
