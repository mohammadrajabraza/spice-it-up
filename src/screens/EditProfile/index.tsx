import React from 'react';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';
import styles from './styles';
import { ProfileNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Button from 'components/Button';
import Input from 'components/Input';

import ProfileIcon from 'assets/svgs/profile-active.svg';
import EmailIcon from 'assets/svgs/email.svg';
import { moderateScale } from 'utils/styles';
import useFormState from 'hooks/use-form-state';
import { ICountry } from 'react-native-international-phone-number';
import PhoneInput from 'components/PhoneInput';
import Radio from 'components/Radio';
import { Spacing } from 'styles';

type EditProfileProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  typeof SCREENS.EDIT_PROFILE
>;

type EditProfileScreen = React.FC<EditProfileProps>;

const iconSize = moderateScale(25);

const EditProfile: EditProfileScreen = () => {
  const { values, handleChange } = useFormState({
    fullName: '',
    email: '',
    phone: '',
    country: null as ICountry | null,
    gender: 'male',
  });

  const setGender = handleChange('gender');
  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2" style={styles.title}>
        Edit Profile
      </Typography>
      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            label="Full Name"
            keyboardType="default"
            autoCapitalize="none"
            key={'fullName'}
            value={values.fullName}
            onChangeText={handleChange('fullName')}
            containerStyle={styles.inputContainer}
            textInputStyle={styles.textInput}
            placeholder="Enter your full name"
            InputLeftElement={
              <ProfileIcon width={iconSize - 5} height={iconSize - 5} />
            }
          />
          <Input
            label="Email Address"
            keyboardType="default"
            autoCapitalize="none"
            key={'email'}
            value={values.email}
            onChangeText={handleChange('email')}
            containerStyle={styles.inputContainer}
            textInputStyle={styles.textInput}
            placeholder="Enter your email address"
            InputLeftElement={<EmailIcon width={iconSize} height={iconSize} />}
          />
          <PhoneInput
            value={values.phone}
            onChangePhoneNumber={handleChange('phone')}
            selectedCountry={values.country}
            onChangeSelectedCountry={handleChange('country')}
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              paddingHorizontal: Spacing.horizontal.size12,
              marginTop: Spacing.vertical.size4,
            }}
          >
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Radio
                selected={values.gender === 'male'}
                onChange={() => {
                  return setGender('male');
                }}
              />
              <Typography variant="body3">Male</Typography>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Radio
                selected={values.gender === 'female'}
                onChange={() => {
                  return setGender('female');
                }}
              />
              <Typography variant="body3">Female</Typography>
            </View>
          </View>
        </View>
        <Button variant="contained" color="primary" title="Update" />
      </View>
    </MainLayout>
  );
};

export default EditProfile;
