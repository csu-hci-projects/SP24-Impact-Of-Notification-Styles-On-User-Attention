// ReadingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Notifier, Easing, NotifierComponents } from 'react-native-notifier';
import { useRouter } from 'expo-router';

const ReadingScreen = ({ notificationType, readingText, screen }) => {
  const [startTime, setStartTime] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setStartTime(new Date().getTime());
    let intervalId;

    if (notificationType === 'intrusive') {
      intervalId = setInterval(() => {
        try {
          Notifier.showNotification({
            title: 'Intrusive Notification',
            description: 'This is an intrusive notification',
            duration: 2000,
            showAnimationDuration: 800,
            showEasing: Easing.bounce,
            Component: NotifierComponents.Alert,
            componentProps: {
              alertType: 'error',
            },
          });
        } catch (error) {
          console.log('Error showing intrusive notification:', error);
        }
      }, 5000);
    } else if (notificationType === 'non-intrusive') {
      intervalId = setInterval(() => {
        try {
          Notifier.showNotification({
            title: 'Non-Intrusive Notification',
            description: 'This is a non-intrusive notification',
            duration: 2000,
            showAnimationDuration: 800,
            showEasing: Easing.ease,
          });
        } catch (error) {
          console.log('Error showing non-intrusive notification:', error);
        }
      }, 30000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
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
    router.push(`/wpm?wpm=${wpm}&screen=${screen}`);
  };

  const handleTestNotification = () => {
    try {
      Notifier.showNotification({
        title: 'Test Notification',
        description: 'This is a test notification',
        duration: 2000,
        showAnimationDuration: 800,
        showEasing: Easing.ease,
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
      });
    } catch (error) {
      console.log('Error showing test notification:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{readingText || 'No reading text available'}</Text>
      <TouchableOpacity style={styles.testButton} onPress={handleTestNotification}>
        <Text style={styles.testButtonText}>Test Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDoneReading}>
        <Text style={styles.buttonText}>Done Reading</Text>
      </TouchableOpacity>
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
  testButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 16,
    alignSelf: 'center',
  },
  testButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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