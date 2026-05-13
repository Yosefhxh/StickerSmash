#!/bin/bash

# ================================================================
# 🎨 StickerSmash - Referencia Rápida de Comandos
# ================================================================

# 📱 EJECUTAR LA APP
npm start                    # Inicia el servidor Expo
npm run ios                  # Abre en iOS Simulator
npm run android              # Abre en Android Emulator
npm run web                  # Abre en navegador web

# 🎨 CAMBIAR ÍCONO
node scripts/generate-icons.js help            # Ver ayuda
node scripts/generate-icons.js convert         # Convertir SVG a PNG
node scripts/generate-icons.js show-svgs       # Listar SVGs disponibles

# 🧹 LIMPIAR Y RESETEAR
npm start -- --clear        # Limpiar caché de Expo
npm run reset-project       # Resetear a estado inicial
rm -rf node_modules         # Eliminar node_modules
npm install                 # Reinstalar dependencias

# 🔍 DEBUGGING
npm run lint                # Verificar código
npm start -- --localhost    # Usar localhost en lugar de IP

# 📦 INSTALAR DEPENDENCIAS ÚTILES
npm install --save-dev sharp              # Para convertir SVG a PNG
npm install expo-image-picker              # Selector de imágenes (ya incluido)
npm install expo-haptics                   # Retroalimentación háptica (ya incluido)

# ================================================================
# 📂 ARCHIVOS IMPORTANTES
# ================================================================
# Pantalla de inicio:          app/splash.tsx
# Layout principal:            app/_layout.tsx
# Ícono mejorado:              assets/images/icon-new.svg
# Ícono actual:                assets/images/icon.png
# Script de iconos:            scripts/generate-icons.js
# Configuración:               app.json

# ================================================================
# 📖 GUÍAS DE REFERENCIA
# ================================================================
# Splash Screen Personalizado: SPLASH_SCREEN_GUIDE.md
# Inicio Rápido:               QUICK_START.md
# Resumen de Cambios:          IMPLEMENTATION_SUMMARY.md
# Documentación Principal:     README.md

# ================================================================
# 🎨 PERSONALIZAR SPLASH SCREEN
# ================================================================
# Editar archivo: app/splash.tsx
#
# Cambiar duración (línea ~30):
#   }, 2500);  // ← Cambiar número aquí (milisegundos)
#
# Cambiar texto (línea ~47 y ~52):
#   <Animated.Text>StickerSmash</Animated.Text>
#   <Animated.Text>¡Crea tus mejores momentos!</Animated.Text>
#
# Cambiar color (línea ~100):
#   backgroundColor: '#E6F4FE',  // ← Cambiar aquí

# ================================================================
# 🌈 COLORES RECOMENDADOS
# ================================================================
# #E6F4FE  - Azul claro (actual)
# #F3E7FF  - Púrpura claro
# #FFE7F0  - Rosa claro
# #FFE8D6  - Naranja claro
# #E7F5E0  - Verde claro

# ================================================================
# ⚠️ SOLUCIÓN DE PROBLEMAS
# ================================================================
# Ícono no cambió:
#   npm start -- --clear
#
# Error converting SVG:
#   npm install --save-dev sharp
#
# Splash screen no aparece:
#   Verifica que app/splash.tsx existe
#   Verifica que app/_layout.tsx esté actualizado
#
# App lenta:
#   Reduce duración de splash (2500ms)
#   Optimiza tamaño de imágenes

# ================================================================
# 🚀 FLUJO TÍPICO DE TRABAJO
# ================================================================
# 1. npm install                          # Instalar dependencias
# 2. npm start                            # Iniciar dev server
# 3. npm run ios                          # Abrir en simulador
# 4. Editar archivos según necesites
# 5. Guardar cambios (hot reload)
# 6. Probar en dispositivo real si es necesario

# ================================================================
# 💡 TIPS
# ================================================================
# - Presiona 'r' en terminal para recargar app
# - Presiona 'i' en terminal para iOS simulator
# - Presiona 'a' en terminal para Android emulator
# - Usa npm install --save-dev sharp para convertir SVG
# - Verifica que icons sean 200x200px mínimo

echo "════════════════════════════════════════════════════════════"
echo "🎨 StickerSmash - Referencia Rápida"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "Comando más usado:"
echo "  npm start"
echo ""
echo "Para cambiar ícono:"
echo "  npm install --save-dev sharp"
echo "  node scripts/generate-icons.js convert"
echo ""
echo "Para más info:"
echo "  cat QUICK_START.md"
echo "  cat SPLASH_SCREEN_GUIDE.md"
echo ""
echo "════════════════════════════════════════════════════════════"
