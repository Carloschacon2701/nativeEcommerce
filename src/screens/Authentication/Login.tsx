/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InputWithLabel} from '../../components/Inputs/InputWithLabel';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/types/types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome6';

type Navigation = NavigationProp<RootStackParamList, 'Login'>;

export const Login = (): React.JSX.Element => {
  const {navigate} = useNavigation<Navigation>();

  const handleRegister = () => {
    navigate('Register');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '125332911005-4imduhd2uphsejvraug14ni8cucfj53u.apps.googleusercontent.com',
    });
    console.log('Google Signin configured');
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../Images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.secondContainer}>
        <InputWithLabel label="Email" iconName="email" />
        <InputWithLabel label="Password" iconName="password" />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherLoginMethods}>
        <Text>Or login with</Text>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}>
          <Icon name="google" />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 110,
    height: 120,
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    flexDirection: 'column',
    position: 'relative',
    gap: 25,
  },

  title: {
    fontSize: 20,
    color: '#343436',
    fontWeight: '700',
    textAlign: 'left',
    width: '80%',
  },

  loginButton: {
    backgroundColor:
      'linear-gradient(90deg, rgba(229,132,74,1) 0%, rgba(227,119,131,1) 35%, rgba(193,90,188,1) 100%)',
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  registerButton: {
    fontWeight: '800',
  },

  forgotPassword: {
    textAlign: 'right',
    width: '100%',
    position: 'absolute',
    bottom: 70,
  },

  otherLoginMethods: {
    textAlign: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  googleButton: {
    width: '40%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#343436',
    borderWidth: 1,
    gap: 10,
  },

  footer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
});
