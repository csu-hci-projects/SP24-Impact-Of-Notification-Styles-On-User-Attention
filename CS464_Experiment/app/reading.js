// reading.js

import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ReadingScreen from './components/ReadingScreen';

const readingTexts = [
  'Reading Text 1',
  'Reading Text 2',
  'Reading Text 3',
];

const Reading = () => {
  const { notificationType, screen } = useLocalSearchParams();
  const currentScreen = parseInt(screen, 10) || 1;
  const readingText = readingTexts[currentScreen - 1] || '';

  return (
    <ReadingScreen
      notificationType={notificationType}
      readingText={readingText}
      screen={currentScreen}
    />
  );
};

export default Reading;