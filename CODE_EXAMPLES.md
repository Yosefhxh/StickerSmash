# 💻 Ejemplos de Código - StickerSmash

Aquí encontrarás ejemplos de cómo personalizar la app.

---

## 🎨 Splash Screen - Cambiar Duración

**Archivo:** `app/splash.tsx`

### Actual (2.5 segundos)
```typescript
// Línea ~30
const timer = setTimeout(async () => {
  await SplashScreen.hideAsync();
  router.replace('/(tabs)');
}, 2500);  // ← 2500 milisegundos = 2.5 segundos
```

### Cambios Recomendados

**1 segundo (rápido):**
```typescript
}, 1000);
```

**3 segundos (normal):**
```typescript
}, 3000);
```

**5 segundos (lento, para más promoción):**
```typescript
}, 5000);
```

---

## 📝 Splash Screen - Cambiar Texto

**Archivo:** `app/splash.tsx`

### Título

**Actual:**
```typescript
<Animated.Text style={styles.title}>
  StickerSmash
</Animated.Text>
```

**Ejemplos alternativos:**
```typescript
// Opción 1
<Animated.Text style={styles.title}>
  Photo Stickers
</Animated.Text>

// Opción 2
<Animated.Text style={styles.title}>
  Sticker Maker
</Animated.Text>

// Opción 3
<Animated.Text style={styles.title}>
  Mi App
</Animated.Text>
```

### Subtítulo

**Actual:**
```typescript
<Animated.Text style={styles.subtitle}>
  ¡Crea tus mejores momentos!
</Animated.Text>
```

**Ejemplos alternativos:**
```typescript
// Opción 1
<Animated.Text style={styles.subtitle}>
  Edita tus fotos
</Animated.Text>

// Opción 2
<Animated.Text style={styles.subtitle}>
  Añade stickers divertidos
</Animated.Text>

// Opción 3
<Animated.Text style={styles.subtitle}>
  Tu creatividad, nuestros stickers
</Animated.Text>

// Opción 4
<Animated.Text style={styles.subtitle}>
  ✨ Bienvenido ✨
</Animated.Text>
```

---

## 🎨 Splash Screen - Cambiar Colores

**Archivo:** `app/splash.tsx`

**Línea ~100:**

### Actual (Azul claro)
```typescript
const styles = StyleSheet.create({
  // ...
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F4FE',  // ← Azul claro
  },
});
```

### Ejemplos de Colores

**Tema Frío:**
```typescript
backgroundColor: '#E0F7FF',  // Cyan muy claro
```

**Tema Caliente:**
```typescript
backgroundColor: '#FFE8D6',  // Naranja claro
```

**Tema Naturaleza:**
```typescript
backgroundColor: '#D4EDDA',  // Verde claro
```

**Tema Romántico:**
```typescript
backgroundColor: '#FFE0F0',  // Rosa claro
```

**Tema Oscuro:**
```typescript
backgroundColor: '#1a1a1a',  // Gris oscuro
```

**Tema Vibrante:**
```typescript
backgroundColor: '#7C3AED',  // Púrpura
```

**Tema Profesional:**
```typescript
backgroundColor: '#F3F4F6',  // Gris muy claro
```

---

## 🌈 Combinaciones de Colores Recomendadas

### Para Apps Creativas
```typescript
// Combinación 1: Rosa + Púrpura
backgroundColor: '#FFE0F0',  // Rosa claro
// Cambiar también title color en styles: '#FF6B9D'

// Combinación 2: Azul + Verde
backgroundColor: '#E0F7FF',  // Cyan
```

### Para Apps Profesionales
```typescript
// Combinación 1: Gris neutro
backgroundColor: '#F3F4F6',

// Combinación 2: Azul corporativo
backgroundColor: '#DBEAFE',
```

### Para Apps Divertidas
```typescript
// Combinación 1: Multicolor
backgroundColor: '#FFE8D6',  // Naranja

// Combinación 2: Tropical
backgroundColor: '#D4EDDA',  // Verde
```

---

## 🎯 Cambiar Logo en Splash Screen

**Archivo:** `app/splash.tsx`

**Línea ~57:**

### Actual
```typescript
<Image
  source={require('../assets/images/icon.png')}
  style={styles.logo}
/>
```

### Alternativas

**Usar otro ícono:**
```typescript
<Image
  source={require('../assets/images/icon-new.svg')}
  style={styles.logo}
/>
```

**Usar emoji en lugar de imagen:**
```typescript
<Text style={{ fontSize: 80, marginBottom: 20 }}>
  🌟
</Text>
```

**Usar SVG:**
```typescript
import { SvgXml } from 'react-native-svg';

<SvgXml
  width={120}
  height={120}
  xml={require('../assets/images/icon-new.svg')}
/>
```

---

## 🎨 Personalizar Estilos

**Archivo:** `app/splash.tsx`

### Cambiar Tamaño del Logo

**Actual:**
```typescript
logo: {
  width: 120,
  height: 120,
  marginBottom: 20,
  borderRadius: 24,
},
```

**Más grande:**
```typescript
logo: {
  width: 160,
  height: 160,
  marginBottom: 20,
  borderRadius: 24,
},
```

**Más pequeño:**
```typescript
logo: {
  width: 80,
  height: 80,
  marginBottom: 20,
  borderRadius: 24,
},
```

### Cambiar Tamaño del Título

**Actual:**
```typescript
title: {
  fontSize: 32,
  fontWeight: '700',
  color: '#25292E',
  marginBottom: 8,
  letterSpacing: 0.5,
},
```

**Más grande:**
```typescript
title: {
  fontSize: 42,
  fontWeight: '700',
  color: '#25292E',
  marginBottom: 8,
  letterSpacing: 0.5,
},
```

**Más pequeño:**
```typescript
title: {
  fontSize: 24,
  fontWeight: '700',
  color: '#25292E',
  marginBottom: 8,
  letterSpacing: 0.5,
},
```

---

## 🔄 Cambiar Duración de Animaciones

**Archivo:** `app/splash.tsx`

### Animación de Entrada Rápida
```typescript
// Línea ~21
Animated.parallel([
  Animated.timing(scaleAnim, {
    toValue: 1,
    duration: 400,  // ← Cambiar de 800 a 400
    easing: Easing.out(Easing.cubic),
    useNativeDriver: true,
  }),
```

### Animación de Entrada Lenta
```typescript
duration: 1200,  // ← Cambiar de 800 a 1200
```

---

## 🚀 Ejemplos de Configuración Completa

### Splash Screen Simple y Rápida
```typescript
// app/splash.tsx
const timer = setTimeout(async () => {
  await SplashScreen.hideAsync();
  router.replace('/(tabs)');
}, 1000);  // 1 segundo

// Estilos
gradient: {
  backgroundColor: '#FFFFFF',  // Blanco
},
```

### Splash Screen Elegante y Lenta
```typescript
// app/splash.tsx
const timer = setTimeout(async () => {
  await SplashScreen.hideAsync();
  router.replace('/(tabs)');
}, 3500);  // 3.5 segundos

// Estilos con colores oscuros
gradient: {
  backgroundColor: '#1E1E1E',  // Gris oscuro
},

// Cambiar colores de texto
title: {
  color: '#FFFFFF',  // Texto blanco
},
```

---

## 📱 Configuración por Plataforma

**Archivo:** `app.json`

### Para iOS
```json
"ios": {
  "supportsTablet": true,
  "bundleIdentifier": "com.anonymous.StikerSmash",
  "infoPlist": {
    "UIAppFonts": []
  }
},
```

### Para Android
```json
"android": {
  "adaptiveIcon": {
    "backgroundColor": "#E6F4FE",  // ← Cambiar color aquí
    "foregroundImage": "./assets/images/icon.png"
  },
  "edgeToEdgeEnabled": true
},
```

---

## 💡 Snippets Útiles

### Agregar Botón en Splash (Avanzado)
```typescript
import { TouchableOpacity } from 'react-native';

<TouchableOpacity
  style={styles.skipButton}
  onPress={async () => {
    await SplashScreen.hideAsync();
    router.replace('/(tabs)');
  }}
>
  <Text>Saltar</Text>
</TouchableOpacity>

// En styles:
skipButton: {
  position: 'absolute',
  top: 50,
  right: 20,
  padding: 10,
  backgroundColor: 'rgba(0,0,0,0.5)',
  borderRadius: 8,
},
```

### Cambiar Color Dinámicamente (Avanzado)
```typescript
import { useColorScheme } from 'react-native';

export default function Splash() {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? '#1a1a1a' : '#E6F4FE';

  return (
    <View style={[styles.gradient, { backgroundColor: bgColor }]}>
      {/* ... */}
    </View>
  );
}
```

---

## ✅ Verificación Rápida

Después de cambios, verifica:

```bash
# Limpiar caché
npm start -- --clear

# Probar en iOS
npm run ios

# Probar en Android
npm run android

# Probar en web
npm run web
```

---

## 🎓 Más Ejemplos

Para más ejemplos avanzados, revisa:
- 📖 [SPLASH_SCREEN_GUIDE.md](SPLASH_SCREEN_GUIDE.md)
- ⚡ [QUICK_START.md](QUICK_START.md)
- 📊 [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)

---

¡Diviértete personalizando! 🎨✨
