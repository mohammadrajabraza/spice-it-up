import React from 'react';

import RNIPhoneNumber from 'react-native-international-phone-number';
import { PhoneInputComponent } from './phone-input.types';
import styles from './styles';

const PhoneInput: PhoneInputComponent = ({ ...props }) => {
  return (
    <RNIPhoneNumber
      {...props}
      placeholder="111 234 5678"
      keyboardType="phone-pad"
      verticalAlign="middle"
      language="en"
      defaultCountry="US"
      phoneInputStyle={styles}
    />
  );
};

export default PhoneInput;
