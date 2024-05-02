// ReadingScreen.js

import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler, ScrollView } from 'react-native';
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
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

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
      setNotificationTitle('Notification');
      setNotificationDescription('This a notification');
      intrusiveIntervalRef.current = setInterval(() => {
        setNotificationVisible(true);
      }, 10000);
    } else if (notificationType === 'non-intrusive') {
      setNotificationTitle('Notification');
      setNotificationDescription('This is a notification');
      nonIntrusiveIntervalRef.current = setInterval(() => {
        setNotificationVisible(true);
      }, 10000);
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
      const textContent = React.Children.toArray(readingText.props.children).join(' ');
      const wordsCount = textContent.split(/\s+/).length;
      console.log('wordsCount', wordsCount);
      wpm = Math.round((wordsCount / timeInSeconds) * 60);
    }
    clearInterval(intrusiveIntervalRef.current);
    clearInterval(nonIntrusiveIntervalRef.current);
    setNotificationVisible(false);

    router.push(`/wpm?wpm=${wpm}&screen=${screen}`);
  };

  const handleCloseNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>{readingText || 'No reading text available'}</Text>
        <TouchableOpacity style={styles.button} onPress={handleDoneReading}>
          <Text style={styles.buttonText}>Done Reading</Text>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'center',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'center',
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