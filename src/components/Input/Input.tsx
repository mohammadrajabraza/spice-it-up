import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { Colors } from 'styles';

import type { InputComponent, InputProps } from './input.types';
import styles from './styles';
import { OptionalPropertyOf } from 'types/utils';

const defaultProps: Required<
  OptionalPropertyOf<Omit<InputProps, keyof TextInputProps>>
> = {
  containerStyle: {},
  textInputStyle: {},
  InputLeftElement: null,
  InputRightElement: null,
};

const Input: InputComponent = (props) => {
  const {
    containerStyle,
    textInputStyle,
    InputLeftElement,
    InputRightElement,
    ...restInput
  } = { ...defaultProps, ...props };
  return (
    <View style={[styles.container, containerStyle]}>
      {InputLeftElement}
      <TextInput
        style={[styles.textInputStyle, textInputStyle]}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={Colors.darkGrey}
        {...restInput}
      />
      {InputRightElement}
    </View>
  );
};

export default Input;
