# 🎨 StickerSmash

StickerSmash es una app de React Native con [Expo](https://expo.dev) para iOS, Android y web. Permite seleccionar una foto, decorarla con stickers o emojis y compartir el resultado con una experiencia visual limpia y directa.

<p align="center">
  <img src="assets/images/icon.png" alt="Logo de StickerSmash" width="160" />
</p>

## ✨ Vista previa visual

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Logo de la app</strong><br />
      <img src="assets/images/icon.png" alt="Logo de StickerSmash" width="180" />
    </td>
    <td align="center" width="50%">
      <strong>Pantalla de carga</strong><br />
      <img src="assets/images/background-image.png" alt="Pantalla de carga de StickerSmash" width="180" />
    </td>
  </tr>
</table>

> Si reemplazas estas imágenes por capturas reales de tu app, mantén el mismo nombre de archivo para que el README las muestre automáticamente.

## 🚀 Qué hace la app

- 📸 Captura o selecciona fotos desde la galería
- ✨ Agrega stickers y emojis sobre la imagen
- 💾 Guarda tus creaciones localmente
- 🎯 Comparte el resultado final

## ✨ Mejoras recientes

### 🚀 Pantalla de inicio animada
- Splash screen profesional con animaciones suaves
- Carga breve antes de mostrar la pantalla principal
- Transición limpia hacia la app

### 🎨 Ícono de app personalizable
- Ícono con estilo más atractivo y moderno
- SVG vectorial escalable de alta calidad
- Herramientas para convertirlo a PNG

**Archivos relacionados:**
- [app.json](app.json)
- [assets/images/icon-new.svg](assets/images/icon-new.svg)
- [scripts/generate-icons.js](scripts/generate-icons.js)
- [SPLASH_SCREEN_GUIDE.md](SPLASH_SCREEN_GUIDE.md)

## 🚀 Comenzar

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar la app
npm start
```

### Ejecutar en Emulador/Simulador

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

---

## 📁 Estructura del Proyecto

```
stikersmash/
├── app/                           # Rutas y layouts (Expo Router)
│   ├── _layout.tsx               # Layout principal (splash → tabs)
│   ├── splash.tsx                # Pantalla de inicio animada ✨
│   └── (tabs)/                   # Navegación por tabs
│       ├── index.tsx             # Pantalla principal
│       └── about.tsx             # Pantalla de información
│
├── components/                    # Componentes reutilizables
│   ├── Button.tsx
│   ├── CircleButton.tsx
│   ├── EmojiPicker.tsx           # Selector de emojis
│   ├── EmojiSticker.tsx          # Componente de sticker
│   ├── EmojiList.tsx             # Lista de emojis disponibles
│   ├── ImageViewer.tsx           # Visor de imagen
│   ├── IconButton.tsx
│   └── AppIcon.tsx               # Componente del ícono ✨
│
├── assets/
│   ├── images/
│   │   ├── icon.png              # Ícono principal de la app
│   │   ├── icon-new.svg          # Ícono mejorado (SVG)
│   │   ├── favicon.png           # Favicon web
│   │   └── emoji*.png            # Assets de emojis
│   └── fonts/
│
├── scripts/
│   ├── reset-project.js
│   └── generate-icons.js         # Script para generar iconos ✨
│
├── app.json                       # Configuración Expo (actualizada)
├── tsconfig.json                  # Configuración TypeScript
├── eslint.config.js               # Configuración ESLint
└── package.json                   # Dependencias
```

---

## 🎨 Cambiar el Ícono de la App

### Opción 1: Usar el SVG Incluido (Recomendado)

```bash
# Instala sharp (convertir SVG a PNG)
npm install --save-dev sharp

# Convierte el SVG a PNG
node scripts/generate-icons.js convert
```

### Opción 2: Usar un Ícono Prediseñado

1. Descarga desde [Icons8](https://icons8.com) o [Flaticon](https://www.flaticon.com/)
2. Asegúrate que sea 200x200px en formato PNG
3. Reemplaza `assets/images/icon.png`

### Opción 3: Crear tu Propio Ícono

1. Diseña en [Figma](https://figma.com), [Photoshop](https://www.adobe.com/products/photoshop.html), etc.
2. Exporta como PNG (200x200px, sin fondo si es posible)
3. Guarda como `assets/images/icon.png`

**Para más detalles:** Ver [SPLASH_SCREEN_GUIDE.md](SPLASH_SCREEN_GUIDE.md)

## 🖼 Apartado visual para branding

Aquí puedes mantener las imágenes más importantes de la app en un solo lugar para que el README se vea más profesional.

### Logo oficial

Usa una imagen cuadrada, limpia y con buen contraste. El archivo recomendado es [assets/images/icon.png](assets/images/icon.png).

```md
![Logo de StickerSmash](assets/images/icon.png)
```

### Pantalla de carga

Usa una captura real de la splash o una composición de marca. El archivo actual de referencia es [assets/images/background-image.png](assets/images/background-image.png).

```md
![Pantalla de carga de StickerSmash](assets/images/background-image.png)
```

### Recomendación de presentación

- Mantén ambas imágenes con proporción cuadrada o vertical limpia.
- Usa fondos coherentes con el color principal de la app.
- Si tomas capturas nuevas, reemplaza los archivos en `assets/images/` sin cambiar el nombre.

---

## 🛠 Personalizar la Splash Screen

**Archivo:** `app/splash.tsx`

### Cambiar duración:
```typescript
// Línea ~30
setTimeout(async () => {
  // Cambiar 2500 a lo que prefieras (milisegundos)
}, 2500);
```

### Cambiar texto:
```typescript
<Animated.Text style={styles.title}>
  StickerSmash  {/* Cambiar aquí */}
</Animated.Text>
```

### Cambiar colores:
```typescript
const styles = StyleSheet.create({
  gradient: {
    backgroundColor: '#E6F4FE',  // Cambiar color de fondo
  }
});
```

---

## 📦 Dependencias Principales

```json
{
  "react-native": "0.81.5",
  "react": "19.1.0",
  "expo": "~54.0.33",
  "expo-router": "~6.0.23",
  "expo-splash-screen": "~31.0.13",
  "expo-image-picker": "~17.0.10",
  "expo-haptics": "~15.0.8"
}
```

---

## 📱 Características Principales

✅ Seleccionar fotos de la galería o capturar nuevas
✅ Agregar múltiples stickers/emojis a la foto
✅ Mover y escalar stickers
✅ Guardar la imagen editada
✅ Compartir creaciones
✅ Interfaz intuitiva y responsive
✅ Animaciones suaves
✅ Soporte para tema claro/oscuro

---

## 🔧 Scripts Disponibles

```bash
# Iniciar desarrollo
npm start

# Ejecutar en iOS
npm run ios

# Ejecutar en Android
npm run android

# Ejecutar en web
npm run web

# Lint del código
npm run lint

# Resetear proyecto
npm run reset-project

# Generar/convertir iconos
node scripts/generate-icons.js convert
```

---

## 🌐 Tecnologías Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desarrollo
- **Expo Router** - Navegación basada en archivos
- **TypeScript** - Type safety
- **Reanimated** - Animaciones de alto rendimiento
- **Gesture Handler** - Manejo de gestos táctiles

---

## 📚 Recursos Útiles

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Router Guide](https://expo.github.io/router/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎯 Próximas Mejoras Potenciales

- [ ] Editor de filtros de imagen
- [ ] Biblioteca de stickers adicionales
- [ ] Compartir directamente en redes sociales
- [ ] Guardado en la nube
- [ ] Historial de ediciones
- [ ] Temas personalizables

---

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT.

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de:
1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

---

## 💡 Tips de Desarrollo

### Recargar la app durante desarrollo:
- Presiona `r` en la terminal para recargar
- Presiona `i` para iOS simulator
- Presiona `a` para Android emulator

### Ver logs:
```bash
npm start -- --clear
```

### Resetear dependencias:
```bash
npm run reset-project
```

---

¡Disfruta creando! 🎉✨
