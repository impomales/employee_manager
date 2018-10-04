import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry
}) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.inputStyle}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      placeholder={placeholder}
    />
  </View>
);

export { Input };
