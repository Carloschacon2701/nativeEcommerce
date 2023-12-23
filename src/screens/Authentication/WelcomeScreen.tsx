import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../utils/types/types';

type Navigation = NavigationProp<RootStackParamList, 'Welcome'>;

export const WelcomeScreen = () => {
  const {navigate} = useNavigation<Navigation>();

  const handleRegister = () => {
    navigate('Register');
  };

  const handleLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's get started</Text>
      <Image
        source={require('../../Images/welcome.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text>
        Already have an account?{' '}
        <Text onPress={handleLogin} style={styles.signIn}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ff8d8a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#f4f8fb',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 40,
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: '40%',
  },
  button: {
    backgroundColor: '#ff8d8a',
    width: '90%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signIn: {
    fontWeight: 'bold',
  },
});
