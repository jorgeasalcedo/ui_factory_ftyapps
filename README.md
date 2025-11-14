# @ftyapps/ui-factory

Sistema de componentes React con estilos dinámicos y comportamientos flexibles

[![NPM Version](https://img.shields.io/npm/v/@ftyapps/ui-factory.svg)](https://www.npmjs.com/package/@ftyapps/ui-factory)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

## 🎯 Características

- ✅ **16 Componentes** (14 base + 2 híbridos)
- ✅ **78 Tests** todos pasando
- ✅ **Estilos dinámicos** desde base de datos (MySQL)
- ✅ **Comportamientos flexibles** configurables
- ✅ **Soporte Mobile/Desktop** con breakpoints responsivos
- ✅ **Temas dinámicos** (light/dark/custom)
- ✅ **TypeScript** con tipos completos y strict mode
- ✅ **Styled Components** para CSS-in-JS
- ✅ **Testing** con Jest y React Testing Library
- ✅ **Componentes híbridos** (MultiSelect, Chips)

## 📦 Instalación

```bash
npm install @ftyapps/ui-factory
# o
yarn add @ftyapps/ui-factory
# o
pnpm add @ftyapps/ui-factory
```

## 🚀 Uso Básico

```tsx
import { ButtonComponent, TextComponent } from '@ftyapps/ui-factory';

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

MIT © BuenaTuCompra Team
