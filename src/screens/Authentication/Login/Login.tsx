/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InputWithLabel} from '../../../components/Inputs/InputWithLabel';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../utils/types/types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useQuery} from 'react-query';
import { AuthServices } from '../../../utils/services/AuthServices';

type Navigation = NavigationProp<RootStackParamList, 'Login'>;

export const Login = (): React.JSX.Element => {
  const {navigate} = useNavigation<Navigation>();
  const {} = useQuery({
    queryKey: ['googleLogin'],
    queryFn: 
  });

  const handleRegister = () => {
    navigate('Register');
  };

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
      <Image source={require('../../../Images/logo.png')} style={styles.logo} />
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
      <ActivityIndicator size="small" color="rgba(193,90,188,1)" />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 130,
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
    backgroundColor: 'rgba(193,90,188,1)',
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
