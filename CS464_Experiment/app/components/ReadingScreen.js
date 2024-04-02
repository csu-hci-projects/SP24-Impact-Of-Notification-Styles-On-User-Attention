import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Notifier, Easing, NotifierComponents } from 'react-native-notifier';
import { useFocusEffect, useRouter } from 'expo-router';

const ReadingScreen = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const router = useRouter();
  const text = "READING TEXT WILL BE HERE!";

  useFocusEffect(
    React.useCallback(() => {
      setVisitCount((prevCount) => prevCount + 1);
      setStartTime(new Date().getTime());
    }, [])
  );

  useEffect(() => {
    let intervalId;

    if (visitCount === 2) {
      intervalId = setInterval(() => {
        Notifier.showNotification({
          title: 'Intrusive Notification',
          description: 'This is an intrusive notification',
          duration: 2000,
          showAnimationDuration: 800,
          showEasing: Easing.bounce,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'info',
          },
        });
      }, 5000);
    } else if (visitCount === 3) {
      intervalId = setInterval(() => {
        Notifier.showNotification({
          title: 'Non-Intrusive Notification',
          description: 'This is a non-intrusive notification',
          duration: 2000,
          showAnimationDuration: 800,
          showEasing: Easing.ease,
        });
      }, 10000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [visitCount]);

  const handleDoneReading = () => {
    const endTime = new Date().getTime();
    const timeInSeconds = (endTime - startTime) / 1000;
    const wordsCount = text.split(' ').length;
    const wpm = Math.round((wordsCount / timeInSeconds) * 60);
    router.push(`/wpm?wpm=${wpm}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDoneReading}>
        <Text style={styles.buttonText}>Done Reading</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReadingScreen;