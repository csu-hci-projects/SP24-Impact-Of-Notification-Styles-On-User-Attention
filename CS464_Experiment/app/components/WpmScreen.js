import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const WpmScreen = () => {
  const { wpm } = useLocalSearchParams();
  const router = useRouter();

  const handleStartNextReading = () => {
    router.push('/reading');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wpmText}>Your reading speed: {wpm} WPM</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartNextReading}>
        <Text style={styles.buttonText}>Start Next Reading</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16
  },
  wpmText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '15%',
    minWidth:150,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default WpmScreen;