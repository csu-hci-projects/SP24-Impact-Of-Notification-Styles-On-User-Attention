import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NotifierWrapper } from 'react-native-notifier';
import ReadingScreen from './components/ReadingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NotifierWrapper>
        <Stack.Navigator initialRouteName="Reading">
          <Stack.Screen
            name="Reading"
            component={ReadingScreen}
          />
        </Stack.Navigator>
      </NotifierWrapper>
    </NavigationContainer>
  );
};

export default App;