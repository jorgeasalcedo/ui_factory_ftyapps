# Contribuyendo a @ftyapps/ui-factory

¡Gracias por tu interés en contribuir! 🎉

## 🚀 Configuración del Desarrollo

1. **Fork y clone el repositorio**
```bash
git clone https://github.com/ftyapps/ui_factory_ftyapps.git
cd ui_factory_ftyapps
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Corre los tests**
```bash
npm test
```

## 📝 Proceso de Contribución

1. **Crea una branch** desde `main`
```bash
git checkout -b feature/mi-nueva-funcionalidad
```

2. **Haz tus cambios** siguiendo las convenciones del proyecto

3. **Asegúrate que los tests pasen**
```bash
npm test
npm run typecheck
npm run build
```

4. **Commit con mensajes descriptivos**
```bash
git commit -m "feat: agregar nuevo componente DatePicker"
```

5. **Push y crea un Pull Request**
```bash
git push origin feature/mi-nueva-funcionalidad
```

## 🏗️ Estructura de Componentes

Cada componente debe seguir esta estructura:

```
src/components/NuevoComponente/
├── types.ts                    # Interfaces y tipos
├── NuevoComponente.styled.tsx  # Styled components
├── NuevoComponente.tsx         # Componente principal
├── NuevoComponente.test.tsx    # Tests unitarios
└── index.ts                    # Exports
```

## ✅ Checklist para Nuevos Componentes

- [ ] Implementar el componente siguiendo la estructura
- [ ] Agregar tipos TypeScript completos
- [ ] Crear styled components con sistema de estilos dinámicos
- [ ] Escribir tests (mínimo 5 tests por componente)
- [ ] Agregar exports a `src/index.ts`
- [ ] Documentar props en JSDoc
- [ ] Asegurar accesibilidad (ARIA labels, roles, etc.)
- [ ] Verificar soporte mobile/desktop
- [ ] Actualizar README si es necesario

## 🧪 Escribiendo Tests

Usa Jest y React Testing Library:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MiComponente } from './MiComponente';

describe('MiComponente', () => {
  it('renderiza correctamente', () => {
    render(<MiComponente data={{ text: 'Test' }} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  
  // ... más tests
});
```

## 🎨 Convenciones de Código

- **TypeScript strict mode** activado
- **Styled Components** para todos los estilos
- **Props con `$` prefix** para styled props ($category, $element)
- **Interfaces con sufijo `Props`** (ButtonComponentProps)
- **Exports nombrados** (no default exports)
- **Tests con `.test.tsx`** extension

## 📋 Commit Messages

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva funcionalidad
- `fix:` corrección de bugs
- `docs:` cambios en documentación
- `style:` cambios de formato (no código)
- `refactor:` refactorización de código
- `test:` agregar o modificar tests
- `chore:` tareas de mantenimiento

## 🐛 Reportando Bugs

Usa la plantilla de issues en GitHub e incluye:

- Descripción clara del bug
- Pasos para reproducir
- Comportamiento esperado vs actual
- Versión del paquete
- Screenshots si aplica

## 💡 Solicitando Funcionalidades

Abre un issue con:

- Descripción de la funcionalidad
- Casos de uso
- Ejemplos de API propuesta
- Mockups si aplica

## 📞 Contacto

- GitHub Issues: https://github.com/ftyapps/ui_factory_ftyapps/issues
- Email: dev@ftyapps.com

¡Gracias por contribuir! 🙌
