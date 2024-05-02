import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
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
      <Text style={styles.step}>1. Open the survey and read and complete the first section by pressing the button below.</Text>
      <Text style={styles.step}>2. Keep the survey open and fill it out as you finish each section in the experiment.</Text>
      <Text style={styles.step}>3. Only answer the survey questions when done with each section.</Text>
      <Text style={styles.step}>4. Please DO NOT answer questions while you are reading the upcoming passages</Text>
      <Text style={styles.step}>5. Please make sure you signed the consent form</Text>

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