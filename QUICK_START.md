# 🎯 Quick Start - Cambiar Ícono y Splash Screen

## ⚡ Forma Más Rápida (5 minutos)

### Paso 1: Descargar nuevo ícono
Elige una de estas opciones:

**Opción A - Usar ícono SVG incluido:**
```bash
npm install --save-dev sharp
node scripts/generate-icons.js convert
```

**Opción B - Descargar de Icons8:**
1. Ve a https://icons8.com/icons
2. Busca "sticker" o "emoji"
3. Descarga PNG (asegurate que sea 200x200px)
4. Guarda como: `assets/images/icon.png`

**Opción C - Usar Figma (Gratis):**
1. Ve a https://www.figma.com
2. Crea un cuadrado 200x200
3. Diseña tu ícono
4. Exporta como PNG
5. Guarda como: `assets/images/icon.png`

### Paso 2: Verifica el cambio
```bash
npm start
```

¡Listo! ✨

---

## 🎨 Scripts Disponibles

```bash
# Ver ayuda de iconos
node scripts/generate-icons.js help

# Convertir SVG a PNG
node scripts/generate-icons.js convert

# Ver SVGs disponibles
node scripts/generate-icons.js show-svgs
```

---

## 🔧 Personalizar Splash Screen

**Archivo:** `app/splash.tsx`

### Cambiar el tiempo (segundos):
```typescript
// Línea ~30 (actualmente 2500ms = 2.5 segundos)
setTimeout(async () => {
  await SplashScreen.hideAsync();
  router.replace('/(tabs)');
}, 2500);  // ← Cambiar número aquí (en milisegundos)
```

### Cambiar el texto:
```typescript
// Línea ~47
<Animated.Text style={styles.title}>
  StickerSmash  {/* ← Cambiar aquí */}
</Animated.Text>

// Línea ~52
<Animated.Text style={styles.subtitle}>
  ¡Crea tus mejores momentos!  {/* ← Cambiar aquí */}
</Animated.Text>
```

### Cambiar color de fondo:
```typescript
// Línea ~100 (en StyleSheet.create())
gradient: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E6F4FE',  // ← Cambiar color aquí
},
```

---

## 🎨 Colores Recomendados para Splash

Copia el color que te guste y reemplázalo en `app/splash.tsx`:

```typescript
// Azul claro (actual)
backgroundColor: '#E6F4FE'

// Gradiente púrpura
backgroundColor: '#F3E7FF'

// Gradiente rosa
backgroundColor: '#FFE7F0'

// Gradiente naranja
backgroundColor: '#FFE8D6'

// Gradiente verde
backgroundColor: '#E7F5E0'

// Gradiente rojo
backgroundColor: '#FFE0E0'

// Gradiente amarillo
backgroundColor: '#FFFACD'

// Gris claro
backgroundColor: '#F5F5F5'

// Azul oscuro
backgroundColor: '#1E3A8A'
```

---

## 🔄 Flujo de la App Actualizado

```
┌─────────────────────┐
│  App Inicia         │
│  ↓                  │
│  Splash Screen      │ ← 2.5 segundos
│  (Animada)          │
│  ↓                  │
│  Transición suave   │
│  ↓                  │
│  Pantalla Principal │
│  (Tabs)             │
└─────────────────────┘
```

---

## 📋 Checklist

- [ ] Cambié el ícono de la app
- [ ] Verifiqué que el ícono se ve bien (200x200px)
- [ ] Personalicé el texto del splash screen
- [ ] Cambié los colores si lo deseé
- [ ] Ejecuté `npm start` para probar
- [ ] La app muestra la splash screen por 2.5 segundos
- [ ] La transición es suave

---

## ⚠️ Posibles Problemas

**P: El ícono no cambió después de reemplazar el archivo**
R: Ejecuta: `npm start -- --clear` para limpiar la caché

**P: La splash screen no aparece**
R: Asegúrate de que `app/splash.tsx` existe y `app/_layout.tsx` está actualizado

**P: Error al convertir SVG a PNG**
R: Instala sharp: `npm install --save-dev sharp`

**P: El ícono se ve pixelado**
R: Asegúrate que sea al menos 200x200px, mejor 1024x1024px

---

## 🚀 Cuando Todo está Listo

```bash
# Crear build para iOS
npm run ios

# Crear build para Android
npm run android

# Crear build para web
npm run web
```

---

¡Necesitas ayuda? Revisa [`SPLASH_SCREEN_GUIDE.md`](SPLASH_SCREEN_GUIDE.md) para más detalles. 🎉
