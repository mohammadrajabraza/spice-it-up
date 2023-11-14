import React from 'react';

import RNIPhoneNumber from 'react-native-international-phone-number';

import type { PhoneInputComponent } from './phone-input.types';
import styles from './styles';

const PhoneInput: PhoneInputComponent = ({ ...props }) => (
  <RNIPhoneNumber
    {...props}
    placeholder="111 234 5678"
    keyboardType="phone-pad"
    verticalAlign="middle"
    language="en"
    defaultCountry="US"
    phoneInputStyles={styles}
  />
);

export default PhoneInput;
