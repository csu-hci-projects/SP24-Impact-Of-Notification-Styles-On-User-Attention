// ReadingScreen.js

import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import NotificationModal from './NotificationModal';

const ReadingScreen = ({ readingText }) => {
  const [startTime, setStartTime] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationDescription, setNotificationDescription] = useState('');
  const router = useRouter();
  const { notificationType, screen } = useLocalSearchParams();
  const intrusiveIntervalRef = useRef(null);
  const nonIntrusiveIntervalRef = useRef(null);

  useEffect(() => {
    setStartTime(new Date().getTime());

    return () => {
      clearInterval(intrusiveIntervalRef.current);
      clearInterval(nonIntrusiveIntervalRef.current);
      setNotificationVisible(false);
    };
  }, []);

  useEffect(() => {
    if (notificationType === 'intrusive') {
      setNotificationTitle('Intrusive Notification');
      setNotificationDescription('This is an intrusive notification');
      intrusiveIntervalRef.current = setInterval(() => {
        setNotificationVisible(true);
      }, 5000);
    } else if (notificationType === 'non-intrusive') {
      setNotificationTitle('Non-Intrusive Notification');
      setNotificationDescription('This is a non-intrusive notification');
      nonIntrusiveIntervalRef.current = setInterval(() => {
        setNotificationVisible(true);
      }, 5000);
    }

    return () => {
      clearInterval(intrusiveIntervalRef.current);
      clearInterval(nonIntrusiveIntervalRef.current);
      setNotificationVisible(false);
    };
  }, [notificationType]);

  const handleDoneReading = () => {
    const endTime = new Date().getTime();
    const timeInSeconds = (endTime - startTime) / 1000;
    let wpm = 0;
    if (readingText) {
      const wordsCount = readingText.split(' ').length;
      wpm = Math.round((wordsCount / timeInSeconds) * 60);
    }
    clearInterval(intrusiveIntervalRef.current);
    clearInterval(nonIntrusiveIntervalRef.current);
    setNotificationVisible(false);

    const currentScreen = screen || '1';

    if (currentScreen === '1') {
      const googleFormUrl = `https://forms.gle/PEdjsftMQ7ZWXzyf6`;
      Linking.openURL(googleFormUrl).catch((err) => console.error('An error occurred when opening the Google Form', err));
    }

    router.push(`/wpm?wpm=${wpm}&screen=${screen}`);
  };

  const handleCloseNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{readingText || 'No reading text available'}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDoneReading}>
        <Text style={styles.buttonText}>Done Reading</Text>
      </TouchableOpacity>
      {notificationVisible && (
        <NotificationModal
          visible={notificationVisible}
          title={notificationTitle}
          description={notificationDescription}
          onClose={handleCloseNotification}
          intrusive={notificationType === 'intrusive'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '15%',
    minWidth: 150,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReadingScreen;