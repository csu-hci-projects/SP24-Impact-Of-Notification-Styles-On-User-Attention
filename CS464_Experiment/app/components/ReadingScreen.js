import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Notifier, Easing, NotifierComponents } from 'react-native-notifier';

const ReadingScreen = () => {
  const text = "READING TEXT WILL BE HERE!";

  useEffect(() => {
    const notificationTypes = ['text', 'multimedia', 'interactive'];
    let currentIndex = 0;

    const showNotification = () => {
      const notificationType = notificationTypes[currentIndex];

      switch (notificationType) {
        case 'text':
          Notifier.showNotification({
            title: 'Text Notification',
            description: 'This is a text notification',
            duration: 2000,
            showAnimationDuration: 800,
            showEasing: Easing.bounce,
          });
          break;
        case 'multimedia':
          Notifier.showNotification({
            title: 'Multimedia Notification',
            description: 'This is a multimedia notification',
            duration: 2000,
            showAnimationDuration: 800,
            showEasing: Easing.bounce,
            componentProps: {
              imageSource: require('../assets/image.png'),
            },
          });
          break;
        case 'interactive':
          Notifier.showNotification({
            title: 'Interactive Notification',
            description: 'This is an interactive notification',
            duration: 2000,
            showAnimationDuration: 800,
            showEasing: Easing.bounce,
            Component: NotifierComponents.Notification,
          });
          break;
        default:
          break;
      }

      currentIndex = (currentIndex + 1) % notificationTypes.length;
    };

    const intervalId = setInterval(() => {
      const randomNumber = Math.random();
      console.log('Random number:', randomNumber); // Log the random number

      if (randomNumber < 0.8) {
        showNotification();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
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
});

export default ReadingScreen;