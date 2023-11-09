import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { Colors } from 'styles';

import type { InputComponent, InputProps } from './input.types';
import styles from './styles';
import { OptionalPropertyOf } from 'types/utils';
import Typography from 'components/Typography';

const defaultProps: Required<
  OptionalPropertyOf<Omit<InputProps, keyof TextInputProps>>
> = {
  containerStyle: {},
  textInputStyle: {},
  InputLeftElement: null,
  InputRightElement: null,
  label: ''
};

const Input: InputComponent = (props) => {
  const {
    containerStyle,
    textInputStyle,
    InputLeftElement,
    InputRightElement,
    label,
    ...restInput
  } = { ...defaultProps, ...props };
  return (
    <View style={[styles.container, containerStyle]}>
      {InputLeftElement}
      <View style={[styles.textInputContainer, textInputStyle]}>
        {!!label && <Typography variant='caption' style={styles.label}>{label}</Typography>} 
        <TextInput
          style={[styles.textInput]}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={Colors.darkGrey}
          {...restInput}
        />
      </View>
      {InputRightElement}
    </View>
  );
};

export default Input;
