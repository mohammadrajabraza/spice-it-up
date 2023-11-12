import React from 'react'
import { ComponentConfig } from 'storybook/utils/component-config';
import PhoneInput from './PhoneInput';
import { ICountry } from 'react-native-international-phone-number';
import { useState } from 'react';

const PhoneInputStory = () => {
  const [value, setValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  return (
    <PhoneInput
      value={value}
      selectedCountry={selectedCountry}
      onChangePhoneNumber={setValue}
      onChangeSelectedCountry={setSelectedCountry}
    />
  );
};

export default {
  title: 'PhoneInput',
  component: PhoneInputStory,
  props: {
    ur: {},
    en: {},
  },
} satisfies ComponentConfig<typeof PhoneInputStory>;
