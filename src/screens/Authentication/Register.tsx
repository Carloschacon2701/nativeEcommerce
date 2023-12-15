import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {InputWithLabel} from '../../components/Inputs/InputWithLabel';
import {RootStackParamList} from '../../utils/types/types';

type Navigation = NavigationProp<RootStackParamList, 'Register'>;

export const Register = (): React.JSX.Element => {
  const {goBack} = useNavigation<Navigation>();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>
      <View style={styles.secondContainer}>
        <InputWithLabel label="Email" iconName="email" />
        <InputWithLabel label="Password" iconName="password" />
        <InputWithLabel label="Confirm Password" iconName="password" />

        <TouchableOpacity style={styles.registerButton}>
          <Text style={{color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherRegisterMethods}>
        <Text>Or register with</Text>
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

  registerButton: {
    backgroundColor: '#343436',
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  otherRegisterMethods: {
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
