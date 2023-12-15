/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InputWithLabel} from '../../components/Inputs/InputWithLabel';
import Icon from 'react-native-vector-icons/FontAwesome6';

export const Login = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
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
        <View style={styles.socialMediaContainer}>
          <Icon name="github" style={styles.icons} />
          <Icon name="facebook" style={styles.icons} />
          <Icon name="google" style={styles.icons} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    gap: 25,
  },

  title: {
    fontSize: 40,
    color: '#343436',
    fontWeight: '700',
  },

  loginButton: {
    backgroundColor: '#343436',
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPassword: {
    textAlign: 'right',
    width: '100%',
  },

  otherLoginMethods: {
    textAlign: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  socialMediaContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  icons: {
    color: '#343436',
    fontSize: 40,
  },
});
