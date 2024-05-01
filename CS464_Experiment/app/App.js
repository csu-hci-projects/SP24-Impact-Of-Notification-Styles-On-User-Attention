// app.js

import React from 'react';
import { NotifierWrapper } from 'react-native-notifier';
import { Stack } from 'expo-router';
import ThankYouScreen from './components/ThankYouScreen';

const App = () => {
  return (
    <NotifierWrapper>
      <Stack>
        <Stack.Screen name="index" path="/" />
        <Stack.Screen name="reading" path="/reading" />
        <Stack.Screen name="wpm" path="/wpm" />
        <Stack.Screen name="thank-you" path="/thanks"/>
      </Stack>
    </NotifierWrapper>
  );
};

export default App;