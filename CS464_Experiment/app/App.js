// app.js

import React from 'react';
import { Stack } from 'expo-router';

const App = () => {
  return (
    <Stack ScreenOptions={{headerShow:null}}>
      <Stack.Screen name="index" path="/"/>
      <Stack.Screen name="instructions" path="/instructions"/>
      <Stack.Screen name="reading" path="/reading"/>
      <Stack.Screen name="wpm" path="/wpm"/>
      <Stack.Screen name="thanks" path="/thanks"/>
    </Stack>
  );
};

export default App;