import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const NOTIFICATION_CHANNEL_ID = 'default';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function configureNotificationChannelAsync() {
  if (Platform.OS !== 'android') {
    return;
  }

  await Notifications.setNotificationChannelAsync(NOTIFICATION_CHANNEL_ID, {
    name: 'Default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C',
  });
}

export async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'web') {
    return {
      token: null,
      error: 'Las push notifications no están disponibles en web.',
    };
  }

  await configureNotificationChannelAsync();

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return {
      token: null,
      error: 'No se otorgaron permisos para notificaciones.',
    };
  }

  const projectId =
    Constants.expoConfig?.extra?.eas?.projectId ?? Constants.easConfig?.projectId;

  if (!projectId) {
    return {
      token: null,
      error:
        'Falta el projectId de EAS. Ejecuta eas init / desarrolla una development build para obtener el ExpoPushToken.',
    };
  }

  try {
    const pushToken = await Notifications.getExpoPushTokenAsync({ projectId });
    return {
      token: pushToken.data,
      error: null,
    };
  } catch (error) {
    return {
      token: null,
      error: error instanceof Error ? error.message : 'No se pudo obtener el ExpoPushToken.',
    };
  }
}

export async function scheduleLocalTestNotificationAsync() {
  await configureNotificationChannelAsync();

  return Notifications.scheduleNotificationAsync({
    content: {
      title: 'StickerSmash',
      body: 'Tu sistema de notificaciones está funcionando.',
      data: {
        url: '/notifications',
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
      channelId: NOTIFICATION_CHANNEL_ID,
    },
  });
}
