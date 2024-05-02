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
        Please read before continuing the experiment.
      </Text>
      <Text style={styles.instructions}>You will be navigating between two webpages. This webapp and a google form that is opened by the "Open Form" button. {'\n'} The process of taking the experiment should be as such:</Text>
      <View style={styles.stepContainer}>
      <Text style={styles.step}>1. Open the form and fill out the initial fields.</Text>
      <Text style={styles.step}>2. Return to this webapp when you reach DO NOT CONTINUE section in the form.</Text>
      <Text style={styles.step}>3. Click on the "Start Reading" or "Next Reading" button.</Text>
      <Text style={styles.step}>4. After you are done with the reading, return to the form and answer the questions for the next section.</Text>
      <Text style={styles.step}>5. Repeat steps 2 through 4.</Text>
      <Text style={styles.instructions}>Thank you for reading the instructions and please note that the "Start Reading" button won't work until you open the form.</Text>

      </View>
      <TouchableOpacity style={styles.button} onPress={handleOpenSurvey}>
        <Text style={styles.buttonText}>Open Form</Text>
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
  stepContainer: {
    justifyContent: 'left',
    alignItems: 'left',
  },
  step: {
    fontSize: 16,
    marginBottom: 10,
    justifyContent: 'left'
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