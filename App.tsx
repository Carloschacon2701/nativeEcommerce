/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HelloWorld from './src/screens/HelloWorld';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}>
        <Stack.Screen name="Home" component={HelloWorld} />
        <Stack.Screen name="pepe" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
