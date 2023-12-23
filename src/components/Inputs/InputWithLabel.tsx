import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputWithLabelProps extends TextInputProps {
  label: string;
  iconName: string;
  onChangeText?: (text: string) => void;
}

export const InputWithLabel = ({label, iconName}: InputWithLabelProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Icon style={styles.labelText} name={iconName} />
        <Text style={styles.labelText}>{label}</Text>
      </View>

      <TextInput placeholder={label} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 6,
  },

  label: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },

  labelText: {
    fontWeight: '500',
    color: '#343436',
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
});
