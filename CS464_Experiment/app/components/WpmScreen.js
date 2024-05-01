// WpmScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const WpmScreen = () => {
  const { wpm, screen } = useLocalSearchParams();
  const router = useRouter();

  const currentScreen = parseInt(screen, 10) || 1;
  const nextScreen = currentScreen + 1;

  const getNotificationType = () => {
    if (nextScreen === 2) {
      return 'intrusive';
    } else if (nextScreen === 3) {
      return 'non-intrusive';
    }
    return null;
  };

  const handleStartNextReading = () => {
    const notificationType = getNotificationType();
    router.push(`/reading?notificationType=${notificationType}&screen=${nextScreen}`);
  };

  const handleFinishExperiment = () => {
    router.push('/thanks');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wpmText}>Your reading speed: {wpm} WPM</Text>
      {nextScreen <= 3 ? (
        <TouchableOpacity style={styles.button} onPress={handleStartNextReading}>
          <Text style={styles.buttonText}>Start Next Reading</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleFinishExperiment}>
          <Text style={styles.buttonText}>Finish Experiment</Text>
        </TouchableOpacity>
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
  wpmText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
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

export default WpmScreen;