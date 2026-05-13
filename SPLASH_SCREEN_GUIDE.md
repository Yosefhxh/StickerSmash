# 📱 Guía: Implementación de Splash Screen y Cambio de Iconos

## 🎯 Lo que se implementó

### 1. Pantalla de Splash Animada ✨
Se añadió una pantalla de inicio profesional que se muestra durante 2.5 segundos cuando inicia la app.

**Características:**
- Animación suave de entrada (escala + opacidad)
- Logo animado de StickerSmash
- Texto subtítulo personalizado
- Indicador de carga con 3 puntos
- Tema claro/oscuro automático
- Transición fluida hacia las tabs principales

**Archivo:** `app/splash.tsx`

### 2. Flujo de Navegación Mejorado
El layout principal ahora maneja la navegación de splash → tabs de forma automática.

**Cambios en:** `app/_layout.tsx`

---

## 🎨 Cambiar el Ícono de la App

### Opción 1: Usar un Ícono Prediseñado (Recomendado) 🌟

Los mejores servicios para generar iconos son:

1. **Expo Logo Generator** (Oficial)
   - URL: https://www.figma.com/community/file/1155362909441341285
   - Descarga PNG 200x200 en alta calidad

2. **Icons8** 
   - URL: https://icons8.com/icons
   - Busca "sticker" o "emoji"
   - Descarga como PNG (200x200)

3. **Flaticon**
   - URL: https://www.flaticon.com/
   - Muchas opciones de stickers y emojis

4. **Photopea (Editor online)**
   - URL: https://www.photopea.com/
   - Edita el SVG original si deseas customizar

### Opción 2: Generar Ícono desde SVG

Se proporciona un diseño SVG mejorado en `scripts/generate-icons.js`.

**Pasos:**

1. **Instala Sharp** (para convertir SVG a PNG):
```bash
npm install --save-dev sharp
```

2. **Genera el ícono**:
```bash
node scripts/generate-icons.js
```

3. **Convierte SVG a PNG**:
```bash
npx sharp scripts/icon-temp.svg -o assets/images/icon.png
npx sharp scripts/icon-temp.svg -o assets/images/favicon.png
```

### Opción 3: Crear tu Propio Ícono

1. **Crea una imagen en Figma, Photoshop, o similar**
2. **Especificaciones:**
   - Tamaño: 200x200 píxeles (mínimo)
   - Formato: PNG con fondo transparente
   - Estilo: Compatible con el diseño de la app

3. **Guarda en:** `assets/images/icon.png`

---

## 📂 Estructura de Archivos Nuevos

```
app/
├── splash.tsx              ← Pantalla de inicio animada
├── _layout.tsx             ← (Actualizado) Maneja el flujo splash → tabs
└── ...

components/
├── AppIcon.tsx             ← Componente visual del ícono
└── ...

scripts/
└── generate-icons.js       ← Script para generar iconos

app.json                     ← (Actualizado) Configuración mejorada
```

---

## 🔧 Cómo Personalizar la Splash Screen

**Archivo:** `app/splash.tsx`

### Cambiar el tiempo de duración:
```typescript
// Línea ~30: Cambiar de 2500ms a lo que prefieras
setTimeout(async () => {
  await SplashScreen.hideAsync();
  router.replace('/(tabs)');
}, 2500);  // ← Aquí (en milisegundos)
```

### Cambiar el texto:
```typescript
<Animated.Text style={styles.title}>
  StickerSmash  {/* ← Cambiar aquí */}
</Animated.Text>
<Animated.Text style={styles.subtitle}>
  ¡Crea tus mejores momentos!  {/* ← Cambiar aquí */}
</Animated.Text>
```

### Cambiar los colores:
```typescript
// En StyleSheet.create():
gradient: {
  backgroundColor: '#E6F4FE',  // ← Color de fondo
}
```

---

## 🚀 Próximos Pasos

1. **Descarga o genera un nuevo ícono** usando una de las opciones anteriores
2. **Reemplaza** `assets/images/icon.png`
3. **Ejecuta la app:**
   ```bash
   npm start
   ```
4. **Personaliza el texto** en `app/splash.tsx` si lo deseas

---

## 📝 Notas Importantes

- ✅ La pantalla de splash se integra automáticamente en iOS y Android
- ✅ El ícono debe estar en formato PNG
- ✅ Se recomienda usar iconos sin fondo transparente para mejor compatibilidad
- ⚠️ Para cambios en iOS, es posible que necesites limpiar la caché:
  ```bash
  expo prebuild --clean
  ```

---

## 🎨 Colores Sugeridos para la Splash Screen

Si quieres cambiar el esquema de colores:

```typescript
// Gradiente azul-verde (actual)
backgroundColor: '#E6F4FE'

// Alternativas:
// Gradiente púrpura
backgroundColor: '#F3E7FF'

// Gradiente rosa
backgroundColor: '#FFE7F0'

// Gradiente naranja
backgroundColor: '#FFE8D6'

// Gradiente verdadero
backgroundColor: '#E7F5E0'
```

---

¡Tu app está lista con una pantalla de inicio profesional! 🎉
