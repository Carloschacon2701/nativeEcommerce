/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StatusBar,
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

type Navigation = NavigationProp<RootStackParamList, 'Login'>;

export const Login = (): React.JSX.Element => {
  const {navigate} = useNavigation<Navigation>();
  const {} = useQuery({
    queryKey: ['googleLogin'],
    queryFn: () => {},
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
    <>
      <StatusBar backgroundColor="#f4f8fb" barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require('../../../Images/login.png')}
          style={styles.logo}
        />
        <View style={styles.roundedContainer}>
          <View style={styles.secondContainer}>
            <InputWithLabel label="Email" iconName="email" />
            <InputWithLabel label="Password" iconName="password" />
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.otherLoginMethods}>
            <Text>Or</Text>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: 130,
    flex: 1,
  },

  container: {
    backgroundColor: '#f4f8fb',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  roundedContainer: {
    paddingTop: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    backgroundColor: 'white',
    flex: 2,
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
  },

  secondContainer: {
    width: '80%',
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
    backgroundColor: '#ff7d73',
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
    gap: 10,
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
    flexDirection: 'row',
    gap: 5,
  },
});
