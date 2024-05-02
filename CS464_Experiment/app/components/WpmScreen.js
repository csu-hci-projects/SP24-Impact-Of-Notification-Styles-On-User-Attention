// WpmScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const WpmScreen = () => {
  const { wpm, screen } = useLocalSearchParams();
  const router = useRouter();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const currentScreen = parseInt(screen, 10) || 1;
  const nextScreen = currentScreen + 1;

  const getNotificationType = () => {
    if (nextScreen === 2) {
      return 'non-intrusive';
    } else if (nextScreen === 3) {
      return 'intrusive';
    }
    return null;
  };

  const handleStartNextReading = () => {
    const notificationType = getNotificationType();
    if (notificationType) {
      router.push(`/reading?notificationType=${notificationType}&screen=${nextScreen}`);
    }
  };

  const handleFinishExperiment = () => {
    router.push('/thanks');
  };

  const handleFormSubmission = () => {
    setFormSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wpmText}>Your reading speed: {wpm} WPM</Text>
      {!formSubmitted && (
        <>
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}>Return to the form in the other tab and answer the questions for the reading</Text>
          </View>          
          <TouchableOpacity style={styles.button} onPress={handleFormSubmission}>
            <Text style={styles.buttonText}>Press to confirm form completion</Text>
          </TouchableOpacity>
        </>
      )}
      {formSubmitted && (
        <>
          {nextScreen <= 3 ? (
            <TouchableOpacity style={styles.button} onPress={handleStartNextReading}>
              <Text style={styles.buttonText}>Start Next Reading</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleFinishExperiment}>
              <Text style={styles.buttonText}>Finish Experiment</Text>
            </TouchableOpacity>
          )}
        </>
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
  promptContainer: {
    backgroundColor: '#8B0000',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 40,
    alignSelf: 'center',
  },
  promptText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '25%',
    minWidth: 250,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WpmScreen;