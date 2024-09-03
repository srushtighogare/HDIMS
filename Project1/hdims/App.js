import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GraphScreen from './screens/GraphScreen';
import RegistrationPage from './screens/RegistrationPage'; // Import the RegistrationPage

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={{ headerShown: false }} // Hide the header if needed
        />
        <Stack.Screen
          name="Graphs"
          component={GraphScreen}
          options={{ headerShown: false }} // Hide the header if needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
