import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Esconde el splash screen nativo después de que la app se carga
    const hideSplash = async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn("Error hiding splash screen:", error);
      }
    };

    // Espera un poco para asegurar que todo esté listo
    const timer = setTimeout(hideSplash, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
