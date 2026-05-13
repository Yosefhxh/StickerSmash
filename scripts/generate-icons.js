#!/usr/bin/env node

/**
 * Script para generar y convertir iconos para StickerSmash
 * 
 * Uso:
 *   node scripts/generate-icons.js convert  // Convierte SVG a PNG
 *   node scripts/generate-icons.js show-svgs // Muestra SVGs disponibles
 */

const fs = require('fs');
const path = require('path');

const command = process.argv[2] || 'help';
const assetsDir = path.join(__dirname, '../assets/images');

function showSVGs() {
  console.log('\n📋 SVGs disponibles:\n');
  const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.svg'));
  files.forEach(file => {
    const size = fs.statSync(path.join(assetsDir, file)).size;
    console.log(`  ✓ ${file} (${size} bytes)`);
  });
  console.log('');
}

function showHelp() {
  console.log(`
╔════════════════════════════════════════════════════════╗
║         StickerSmash Icon Generator v1.0               ║
╚════════════════════════════════════════════════════════╝

Comandos disponibles:

  📍 node scripts/generate-icons.js convert
     Convierte assets/images/icon-new.svg a PNG
     Requiere: npm install -D sharp

  📍 node scripts/generate-icons.js show-svgs
     Lista todos los archivos SVG disponibles

  📍 node scripts/generate-icons.js help
     Muestra esta ayuda

═══════════════════════════════════════════════════════════

🎨 Opciones rápidas para cambiar de icono:

1️⃣  Usar el SVG mejorado incluido:
    → Archivo: assets/images/icon-new.svg
    → Convertir a PNG con: node scripts/generate-icons.js convert

2️⃣  Usar un icono prediseñado:
    → Descarga desde: https://icons8.com
    → Guarda como: assets/images/icon.png
    → Tamaño recomendado: 200x200px

3️⃣  Crear tu propio icono:
    → Crea en Figma, Photoshop, etc.
    → Exporta como PNG (200x200px, sin fondo)
    → Guarda como: assets/images/icon.png

═══════════════════════════════════════════════════════════

📖 Para más detalles, consulta: SPLASH_SCREEN_GUIDE.md

`);
}

function convertSVG() {
  console.log('\n🔄 Intentando convertir SVG a PNG...\n');
  
  try {
    require('sharp');
  } catch (error) {
    console.error('❌ Error: "sharp" no está instalado.\n');
    console.log('Instálalo con:\n');
    console.log('  npm install --save-dev sharp\n');
    console.log('O con yarn:\n');
    console.log('  yarn add -D sharp\n');
    process.exit(1);
  }

  const sharp = require('sharp');
  const svgPath = path.join(assetsDir, 'icon-new.svg');
  const pngPath = path.join(assetsDir, 'icon.png');
  
  if (!fs.existsSync(svgPath)) {
    console.error(`❌ No se encontró: ${svgPath}`);
    process.exit(1);
  }

  // Hace una copia de seguridad del ícono actual
  const backupPath = path.join(assetsDir, 'icon-backup.png');
  if (fs.existsSync(pngPath) && !fs.existsSync(backupPath)) {
    fs.copyFileSync(pngPath, backupPath);
    console.log(`✅ Copia de seguridad creada: icon-backup.png\n`);
  }

  // Convierte SVG a PNG
  sharp(svgPath)
    .resize(200, 200, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100 })
    .toFile(pngPath, (err, info) => {
      if (err) {
        console.error(`❌ Error al convertir: ${err.message}`);
        process.exit(1);
      }
      console.log(`✅ Ícono convertido exitosamente:`);
      console.log(`   Salida: ${pngPath}`);
      console.log(`   Tamaño: ${info.size} bytes`);
      console.log(`   Dimensiones: ${info.width}x${info.height}px\n`);
      console.log(`🚀 Ejecuta la app con: npm start\n`);
    });
}

// Procesa el comando
switch (command) {
  case 'convert':
    convertSVG();
    break;
  case 'show-svgs':
    showSVGs();
    break;
  case 'help':
  case '--help':
  case '-h':
    showHelp();
    break;
  default:
    console.log(`❌ Comando desconocido: "${command}"\n`);
    showHelp();
    process.exit(1);
}
;
