/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Login} from './src/screens/Authentication/Login/Login';
import {Register} from './src/screens/Authentication/Register/Register';
import {RootStackParamList} from './src/utils/types/types';
import {AuthProvider} from './src/hooks/useAuthContext';
import {QueryClient, QueryClientProvider} from 'react-query';
import {WelcomeScreen} from './src/screens/Authentication/WelcomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
