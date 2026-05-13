import * as Notifications from 'expo-notifications';
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { configureNotificationChannelAsync } from '@/utils/notifications';

function useNotificationObserver() {
  useEffect(() => {
    const redirectFromNotification = (response: Notifications.NotificationResponse) => {
      const destination = response.notification.request.content.data?.url;

      if (typeof destination === 'string') {
        router.push(destination as never);
      }
    };

    const lastResponse = Notifications.getLastNotificationResponse();
    if (lastResponse?.notification) {
      redirectFromNotification(lastResponse);
    }

    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      redirectFromNotification(response);
    });

    return () => subscription.remove();
  }, []);
}

export default function RootLayout() {
  useNotificationObserver();

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

  useEffect(() => {
    configureNotificationChannelAsync();
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
