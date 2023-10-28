import type React from 'react';
import type {
  ImageSourcePropType,
  ImageStyle,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  iconContainerStyle?: ViewStyle;
  image?: ImageSourcePropType;
  icon?: React.ReactNode;
  onIconPress?: () => void;
}

export type InputComponent = React.FC<InputProps>;
