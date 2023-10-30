import type React from 'react';
import type { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  containerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  InputLeftElement?: React.ReactNode;
  InputRightElement?: React.ReactNode;
}

export type InputComponent = React.FC<InputProps>;
