import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
    registerForPushNotificationsAsync,
    scheduleLocalTestNotificationAsync,
} from '@/utils/notifications';

export default function NotificationsScreen() {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
  const [registrationError, setRegistrationError] = useState<string | null>(null);
  const [lastNotification, setLastNotification] = useState<Notifications.Notification | null>(null);
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      const result = await registerForPushNotificationsAsync();
      setExpoPushToken(result.token);
      setRegistrationError(result.error);
      setIsRegistering(false);
    };

    bootstrap();

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setLastNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      setLastNotification(response.notification);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  const handleSendTestNotification = async () => {
    setIsSendingTest(true);

    try {
      await scheduleLocalTestNotificationAsync();
    } finally {
      setIsSendingTest(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      <Text style={styles.subtitle}>
        Aquí puedes probar el registro del dispositivo y enviar una notificación local de prueba.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estado del registro</Text>
        {isRegistering ? (
          <View style={styles.inlineRow}>
            <ActivityIndicator color="#ffd33d" />
            <Text style={styles.statusText}>Registrando permisos y token...</Text>
          </View>
        ) : registrationError ? (
          <Text style={styles.errorText}>{registrationError}</Text>
        ) : (
          <Text style={styles.successText}>Permisos listos y ExpoPushToken obtenido.</Text>
        )}

        <Text style={styles.label}>Expo Push Token</Text>
        <Text selectable style={styles.codeBox}>
          {expoPushToken ?? 'Aún no disponible'}
        </Text>

        <Text style={styles.note}>
          Para push remotas en producción necesitas una development build y un projectId de EAS.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prueba local</Text>
        <Text style={styles.note}>
          Este botón envía una notificación local en 2 segundos para validar el sistema dentro de
          la app.
        </Text>

        <Pressable
          onPress={handleSendTestNotification}
          disabled={isSendingTest}
          style={({ pressed }) => [
            styles.button,
            (pressed || isSendingTest) && styles.buttonPressed,
          ]}>
          <Text style={styles.buttonText}>
            {isSendingTest ? 'Programando...' : 'Enviar notificación de prueba'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Última notificación recibida</Text>
        {lastNotification ? (
          <>
            <Text style={styles.label}>Título</Text>
            <Text style={styles.detailText}>{lastNotification.request.content.title ?? 'Sin título'}</Text>
            <Text style={styles.label}>Mensaje</Text>
            <Text style={styles.detailText}>{lastNotification.request.content.body ?? 'Sin cuerpo'}</Text>
            <Text style={styles.label}>Datos</Text>
            <Text selectable style={styles.codeBox}>
              {JSON.stringify(lastNotification.request.content.data ?? {}, null, 2)}
            </Text>
          </>
        ) : (
          <Text style={styles.note}>
            Todavía no has recibido una notificación en esta sesión.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#25292e',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: '#d1d5db',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#25292e',
    marginBottom: 12,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  statusText: {
    color: '#25292e',
    fontSize: 14,
  },
  successText: {
    color: '#0f7a35',
    fontSize: 14,
    marginBottom: 10,
  },
  errorText: {
    color: '#b42318',
    fontSize: 14,
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#25292e',
    marginTop: 8,
    marginBottom: 6,
  },
  detailText: {
    color: '#374151',
    fontSize: 14,
    lineHeight: 20,
  },
  codeBox: {
    backgroundColor: '#f3f4f6',
    color: '#111827',
    borderRadius: 12,
    padding: 12,
    fontSize: 12,
    lineHeight: 18,
  },
  note: {
    color: '#4b5563',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ffd33d',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#25292e',
    fontWeight: '800',
    fontSize: 15,
  },
});
