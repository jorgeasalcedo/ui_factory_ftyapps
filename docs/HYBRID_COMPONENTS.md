# Componentes Híbridos - MultiSelect y Chip

## 🎯 Resumen

Se han agregado 2 nuevos componentes híbridos a la librería para crear sistemas de filtros dinámicos:

- **MultiSelectComponent**: Dropdown con checkboxes para selección múltiple
- **ChipComponent**: Tags removibles con variantes y tamaños

**Totales actualizados:**
- ✅ 16 componentes (14 base + 2 híbridos)
- ✅ 78 tests (todos pasando)
- ✅ Build exitoso

---

## 🔀 MultiSelectComponent

### Características

- ✅ Dropdown con lista de opciones con checkbox
- ✅ Búsqueda en tiempo real (prop `searchable`)
- ✅ Selección múltiple
- ✅ Contador de seleccionados
- ✅ Visualización de chips para items seleccionados (prop `showChips`)
- ✅ Click fuera para cerrar
- ✅ Navegación con teclado (Enter/Space)
- ✅ maxHeight configurable
- ✅ Estado disabled

### Props

```typescript
interface MultiSelectComponentProps extends BaseComponentProps {
  data: MultiSelectData;
  value?: string[];                    // Array de valores seleccionados
  onChange?: (selected: string[]) => void;
  searchable?: boolean;                // Habilitar búsqueda (default: true)
  showChips?: boolean;                 // Mostrar chips de seleccionados (default: true)
  maxHeight?: string;                  // Altura máxima del dropdown (default: '300px')
  disabled?: boolean;
  placeholder?: string;
}

interface MultiSelectData {
  options: MultiSelectOption[];
  styles?: StyleItem[];
}

interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

### Uso

```tsx
import { MultiSelectComponent } from '@buenatucompra/ui-factory';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' }
];

<MultiSelectComponent
  data={{ options }}
  value={['react', 'vue']}
  onChange={(selected) => console.log(selected)}
  searchable={true}
  showChips={true}
  placeholder="Selecciona tecnologías..."
  $category="filters"
  $element="tech_selector"
/>
```

### Casos de uso

- ✅ Filtros de productos por categorías
- ✅ Selección de tecnologías/skills
- ✅ Tags/etiquetas múltiples
- ✅ Sistemas de permisos
- ✅ Configuración de preferencias

---

## 🏷️ ChipComponent

### Características

- ✅ 5 variantes de color: `default`, `primary`, `success`, `warning`, `danger`
- ✅ 3 tamaños: `small`, `medium`, `large`
- ✅ Removible con botón × (prop `removable`)
- ✅ Clickable con handler onClick
- ✅ Soporte para iconos
- ✅ Estilos dinámicos desde BD
- ✅ Accesibilidad completa

### Props

```typescript
interface ChipComponentProps extends BaseComponentProps {
  data: ChipData;
  removable?: boolean;                 // Mostrar botón de remover
  onRemove?: (e: React.MouseEvent) => void;
  onClick?: () => void;                // Handler para clicks en el chip
  icon?: React.ReactNode;              // Icono opcional
}

interface ChipData {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
}
```

### Variantes de color

| Variante | Color de fondo | Uso sugerido |
|----------|---------------|--------------|
| `default` | `#e9ecef` | General, neutral |
| `primary` | `#667eea` | Principal, destacado |
| `success` | `#28a745` | Éxito, confirmación |
| `warning` | `#ffc107` | Advertencia, precaución |
| `danger` | `#dc3545` | Error, eliminación |

### Tamaños

| Tamaño | Padding | Font size | Border radius |
|--------|---------|-----------|---------------|
| `small` | `0.25rem 0.5rem` | `0.75rem` | `16px` |
| `medium` | `0.5rem 0.75rem` | `0.875rem` | `20px` |
| `large` | `0.75rem 1rem` | `1rem` | `24px` |

### Uso

```tsx
import { ChipComponent } from '@buenatucompra/ui-factory';

// Chip simple
<ChipComponent
  data={{ label: 'React', variant: 'primary' }}
  $category="tags"
  $element="tech_tag"
/>

// Chip removible
<ChipComponent
  data={{ label: 'Vue.js', variant: 'success', size: 'large' }}
  removable={true}
  onRemove={(e) => handleRemove('vue')}
  $category="tags"
  $element="tech_tag"
/>

// Chip clickable
<ChipComponent
  data={{ label: 'Angular', variant: 'warning' }}
  onClick={() => handleClick('angular')}
  $category="tags"
  $element="tech_tag"
/>
```

### Casos de uso

- ✅ Tags/etiquetas de contenido
- ✅ Filtros activos (removibles)
- ✅ Indicadores de estado
- ✅ Skills/habilidades
- ✅ Categorías de productos
- ✅ Selecciones del MultiSelect

---

## 🧪 Tests

### MultiSelect (8 tests)

```bash
✓ renderiza el multiselect cerrado por defecto
✓ abre el dropdown al hacer clic
✓ permite seleccionar múltiples opciones
✓ muestra el contador de seleccionados
✓ permite buscar opciones
✓ muestra chips cuando showChips es true
✓ permite remover chips
✓ respeta la propiedad disabled
```

### Chip (7 tests)

```bash
✓ renderiza el chip con el label correcto
✓ renderiza chip removible con botón de remover
✓ llama a onRemove cuando se hace clic en remover
✓ aplica la variante correcta
✓ aplica el tamaño correcto
✓ renderiza con icono cuando se proporciona
✓ llama a onClick cuando se hace clic en el chip
```

---

## 📁 Estructura de archivos

```
src/components/
├── MultiSelect/
│   ├── types.ts                      # Interfaces y tipos
│   ├── MultiSelect.styled.tsx        # Styled components
│   ├── MultiSelect.tsx               # Componente principal
│   ├── MultiSelect.test.tsx          # Tests unitarios
│   └── index.ts                      # Exports
│
└── Chip/
    ├── types.ts                      # Interfaces y tipos
    ├── Chip.styled.tsx               # Styled components
    ├── Chip.tsx                      # Componente principal
    ├── Chip.test.tsx                 # Tests unitarios
    └── index.ts                      # Exports
```

---

## 🎨 Demo Visual

El archivo `demo/index.html` ha sido actualizado con:

### Sección MultiSelect
- MultiSelect de tecnologías (React, Vue, Angular, etc.)
- MultiSelect de categorías de productos
- Visualización de chips seleccionados
- Output con items seleccionados

### Sección Chips
- Demostración de 5 variantes de color
- Demostración de 3 tamaños
- Chips removibles con función de restaurar

Para ver el demo:
```bash
cd demo
open index.html
# o
python -m http.server 8080
```

---

## 🔄 Integración con MultiSelect

El ChipComponent está diseñado para:

1. **Uso independiente**: Como tags, labels, badges
2. **Uso dentro de MultiSelect**: Muestra las selecciones activas

Ejemplo de integración:
```tsx
<MultiSelectComponent
  data={{ options }}
  value={selected}
  onChange={setSelected}
  showChips={true}  // Usa ChipComponent internamente
  $category="filters"
  $element="product_filter"
/>
```

Internamente, MultiSelect renderiza:
```tsx
{selectedOptions.map((option) => (
  <ChipComponent
    key={option.value}
    data={{ label: option.label, variant: 'primary' }}
    removable={true}
    onRemove={(e) => handleRemoveChip(option.value, e)}
  />
))}
```

---

## 🚀 Comandos

```bash
# Tests
npm test                              # Todos los tests (78)
npm test -- --testPathPattern=MultiSelect   # Solo MultiSelect
npm test -- --testPathPattern=Chip          # Solo Chip

# Build
npm run build                         # Genera dist/

# Demo
open demo/index.html                  # Ver demo visual
```

---

## 📊 Resumen de la librería

| Categoría | Componentes | Tests |
|-----------|-------------|-------|
| **Formularios** | Button, Input, TextArea, Select, RadioButton, Checkbox | 30 |
| **Contenedores** | Div, Form, Section | 10 |
| **Texto** | Text, Label, Span | 13 |
| **Media** | Link, Image | 9 |
| **Híbridos** | MultiSelect, Chip | 15 |
| **TOTAL** | **16** | **78** |

---

## ✅ Próximos pasos sugeridos

1. **DatePicker**: Selector de fechas con calendar view
2. **Modal/Dialog**: Ventanas modales reutilizables
3. **Dropdown Menu**: Menú desplegable con acciones
4. **Tooltip**: Información contextual en hover
5. **Toast/Notification**: Notificaciones temporales
6. **Pagination**: Componente de paginación
7. **Tabs**: Sistema de pestañas
8. **Accordion**: Contenido expandible
9. **Progress Bar**: Barras de progreso
10. **Badge**: Indicadores numéricos

---

## 📝 Notas técnicas

- **Click outside**: Implementado con `useRef` y `useEffect` con cleanup
- **Keyboard navigation**: Enter/Space para abrir dropdown
- **Accessibility**: roles ARIA, aria-expanded, aria-multiselectable
- **Search**: Filtrado case-insensitive en tiempo real
- **Performance**: Memoización de opciones filtradas
- **State management**: Sincronización entre props y estado interno
- **Styling**: Sistema de variantes escalable

---

**Fecha:** 2024
**Versión:** 0.1.0
**Estado:** ✅ Producción ready
