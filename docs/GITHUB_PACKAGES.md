# 📦 GitHub Packages - Guía de Uso

## 🎯 Configuración Completa

Este paquete está publicado en **GitHub Packages** como `@ftyapps/ui-factory`.

---

## 📤 Cómo se Publica (Automático)

### Opción 1: Con Release (Recomendado)

1. Actualiza la versión en `package.json`:
```bash
npm version patch  # 0.1.0 → 0.1.1
# o
npm version minor  # 0.1.0 → 0.2.0
# o
npm version major  # 0.1.0 → 1.0.0
```

2. Pushea el tag:
```bash
git push origin main --tags
```

3. Crea un Release en GitHub:
   - Ve a: https://github.com/ftyapps/ui_factory_ftyapps/releases/new
   - Tag: Selecciona el tag que creaste (ej: `v0.1.1`)
   - Title: `v0.1.1`
   - Description: Changelog de cambios
   - Click "Publish release"

4. **GitHub Actions se ejecuta automáticamente** y publica el paquete

### Opción 2: Manual (Desde GitHub Actions)

1. Ve a: https://github.com/ftyapps/ui_factory_ftyapps/actions
2. Selecciona "Publish to GitHub Packages"
3. Click "Run workflow" → "Run workflow"

---

## 📥 Cómo Instalar el Paquete

### Paso 1: Crear Personal Access Token (Una sola vez)

1. Ve a GitHub Settings: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Nombre: `NPM_PACKAGES_READ`
4. Selecciona permisos:
   - ✅ `read:packages`
   - ✅ `write:packages` (si vas a publicar)
5. Click "Generate token"
6. **Copia el token** (no lo perderás)

### Paso 2: Configurar el Proyecto que va a Usar el Paquete

#### Para Proyectos Individuales

Crea un archivo `.npmrc` en la raíz del proyecto:

```bash
# .npmrc
@ftyapps:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_TOKEN_AQUI
```

**⚠️ IMPORTANTE:** Agrega `.npmrc` a tu `.gitignore` para no subir el token:

```bash
echo ".npmrc" >> .gitignore
```

#### Instalación

```bash
npm install @ftyapps/ui-factory
```

---

## 🔐 Configuración Global (Opcional)

Si trabajas con múltiples proyectos de @ftyapps:

```bash
# Configurar el registry para @ftyapps
npm config set @ftyapps:registry https://npm.pkg.github.com

# Agregar el token globalmente
npm config set //npm.pkg.github.com/:_authToken TU_TOKEN_AQUI
```

Ahora puedes instalar en cualquier proyecto sin crear `.npmrc`:

```bash
npm install @ftyapps/ui-factory
```

---

## 💻 Uso en tus Proyectos

### Proyecto React/Next.js

```tsx
// src/App.tsx o pages/_app.tsx
import { 
  ButtonComponent, 
  MultiSelectComponent,
  ChipComponent 
} from '@ftyapps/ui-factory';

function MyApp() {
  return (
    <div>
      <ButtonComponent
        data={{ text: "Hola desde GitHub Packages!" }}
        onClick={() => alert('Clicked!')}
        $category="hero"
        $element="button_primary"
      />
      
      <MultiSelectComponent
        data={{
          options: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' }
          ]
        }}
        showChips={true}
        $category="filters"
        $element="tech_filter"
      />
    </div>
  );
}
```

### Con estilos desde Base de Datos

```tsx
// Los estilos vienen desde tu BD MySQL
const stylesFromDB = [
  {
    component: 'button',
    category: 'hero',
    element: 'button_primary',
    property: 'background',
    mobile_value: '#667eea',
    desktop_value: '#764ba2',
    state: 'normal'
  }
];

<ButtonComponent
  data={{ 
    text: "Custom Styled Button",
    styles: stylesFromDB 
  }}
  $category="hero"
  $element="button_primary"
/>
```

---

## 🔄 Actualizar el Paquete

```bash
# Ver versión actual
npm list @ftyapps/ui-factory

# Actualizar a la última versión
npm update @ftyapps/ui-factory

# Instalar versión específica
npm install @ftyapps/ui-factory@0.2.0
```

---

## 🏗️ Para Proyectos de FTYApps

### BuenaTuCompra.com

```bash
cd /ruta/a/buenatucompra
echo "@ftyapps:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=TU_TOKEN" >> .npmrc
echo ".npmrc" >> .gitignore
npm install @ftyapps/ui-factory
```

### Otros Proyectos FTYApps

Mismos pasos. Todos los proyectos de la organización pueden usar el mismo token.

---

## 🚨 Troubleshooting

### Error: 404 Not Found

**Causa:** Token sin permisos o registry mal configurado

**Solución:**
```bash
# Verifica el registry
npm config get @ftyapps:registry

# Debe ser: https://npm.pkg.github.com
# Si no, configúralo:
npm config set @ftyapps:registry https://npm.pkg.github.com
```

### Error: 401 Unauthorized

**Causa:** Token inválido o expirado

**Solución:**
1. Genera un nuevo token en GitHub
2. Actualiza tu `.npmrc` o config global

### Error: ENOENT .npmrc

**Causa:** Falta el archivo `.npmrc`

**Solución:**
```bash
echo "@ftyapps:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=TU_TOKEN" >> .npmrc
```

---

## 📊 Verificar Instalación

```bash
# Ver todas las versiones disponibles
npm view @ftyapps/ui-factory versions

# Ver info del paquete
npm view @ftyapps/ui-factory

# Ver dónde está instalado
npm list @ftyapps/ui-factory
```

---

## 🔗 Enlaces Útiles

- **Repositorio:** https://github.com/ftyapps/ui_factory_ftyapps
- **Paquete:** https://github.com/ftyapps/ui_factory_ftyapps/packages
- **Issues:** https://github.com/ftyapps/ui_factory_ftyapps/issues
- **Actions:** https://github.com/ftyapps/ui_factory_ftyapps/actions

---

## 📝 Variables de Entorno (CI/CD)

Para usar en GitHub Actions u otros CI/CD:

```yaml
# .github/workflows/tu-proyecto.yml
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

El `GITHUB_TOKEN` se genera automáticamente en Actions.

---

## ✅ Checklist de Instalación

- [ ] Generar Personal Access Token en GitHub
- [ ] Crear `.npmrc` en tu proyecto
- [ ] Agregar `.npmrc` a `.gitignore`
- [ ] Ejecutar `npm install @ftyapps/ui-factory`
- [ ] Importar componentes en tu código
- [ ] ¡Funciona! 🎉

---

**Última actualización:** 14 de noviembre de 2025  
**Versión del paquete:** 0.1.0
