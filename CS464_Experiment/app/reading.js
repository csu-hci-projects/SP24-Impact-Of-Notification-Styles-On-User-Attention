import { useLocalSearchParams } from 'expo-router';
import ReadingScreen from './components/ReadingScreen';

export default function Reading() {
  const { notificationType } = useLocalSearchParams();

  return <ReadingScreen notificationType={notificationType} />;
}