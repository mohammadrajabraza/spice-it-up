import { PhoneInputProps as RNPhoneInputProps } from 'react-native-international-phone-number'

export type PhoneInputProps = RNPhoneInputProps & {};

export type PhoneInputComponent = (props: PhoneInputProps) => React.JSX.Element;
