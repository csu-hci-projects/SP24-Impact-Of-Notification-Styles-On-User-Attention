import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useRouter } from 'expo-router';

const InstructionsScreen = () => {
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const router = useRouter();

  const handleStartReading = () => {
    if (surveyCompleted) {
      router.push('/reading?notificationType=null&screen=1');
    }
  };

  const handleOpenSurvey = () => {
    const surveyUrl = 'https://forms.gle/PEdjsftMQ7ZWXzyf6';
    Linking.openURL(surveyUrl).catch((err) =>
      console.error('An error occurred when opening the survey', err)
    );
    setSurveyCompleted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <Text style={styles.instructions}>
        Please follow these instructions before starting the reading experiment:
      </Text>
      <Text style={styles.step}>1. Read the instructions carefully.</Text>
      <Text style={styles.step}>2. Keep the survey open and fill it out as you progress in the experiment.</Text>
      <Text style={styles.step}>3. Open the survey by pressing the button below.</Text>
      <Text style={styles.step}>4. Only answer the survey questions when done with each reading.</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenSurvey}>
        <Text style={styles.buttonText}>Open Survey</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, !surveyCompleted && styles.disabledButton]}
        onPress={handleStartReading}
        disabled={!surveyCompleted}
      >
        <Text style={styles.buttonText}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  step: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InstructionsScreen;