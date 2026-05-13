/**
 * Componente para renderizar el ícono mejorado de StickerSmash
 * Este archivo puede ser usado para generar el PNG del ícono
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppIcon = () => {
  return (
    <View style={styles.container}>
      {/* Gradiente de fondo */}
      <View style={styles.background}>
        {/* Cara principal del emoji */}
        <View style={styles.mainFace}>
          {/* Ojos */}
          <View style={[styles.eye, styles.eyeLeft]} />
          <View style={[styles.eye, styles.eyeRight]} />

          {/* Sonrisa */}
          <View style={styles.mouth}>
            <Text style={styles.smile}>😊</Text>
          </View>
        </View>

        {/* Stickers decorativos */}
        <View style={styles.sticker1}>
          <Text style={styles.stickerEmoji}>⭐</Text>
        </View>
        <View style={styles.sticker2}>
          <Text style={styles.stickerEmoji}>✨</Text>
        </View>
        <View style={styles.sticker3}>
          <Text style={styles.stickerEmoji}>💫</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  mainFace: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  eye: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF6B6B',
    position: 'absolute',
  },
  eyeLeft: {
    top: 35,
    left: 30,
  },
  eyeRight: {
    top: 35,
    right: 30,
  },
  mouth: {
    marginTop: 10,
  },
  smile: {
    fontSize: 50,
  },
  sticker1: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    backgroundColor: '#FFD93D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '15deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sticker2: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    width: 35,
    height: 35,
    backgroundColor: '#6BCB77',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-20deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sticker3: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    width: 35,
    height: 35,
    backgroundColor: '#FF6B9D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '25deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  stickerEmoji: {
    fontSize: 18,
  },
});

export default AppIcon;
