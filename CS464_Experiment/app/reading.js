import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ReadingScreen from './components/ReadingScreen';

const Reading = () => {
  const { notificationType } = useLocalSearchParams();
  return <ReadingScreen notificationType={notificationType} />;
};

export default Reading;