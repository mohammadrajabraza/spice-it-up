import React, { useMemo } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View } from 'react-native';

import type { ProfileNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import type { InputProps } from 'components/Input';
import Input from 'components/Input';
import useFormState from 'hooks/use-form-state';
import PasswordIcon from 'assets/svgs/password.svg';
import { moderateScale } from 'utils/styles';
import Button from 'components/Button';

import styles from './styles';

type ChangePasswordProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  typeof SCREENS.CHANGE_PASSWORD
>;

type ChangePasswordScreen = React.FC<ChangePasswordProps>;

const iconSize = moderateScale(25);

const ChangePassword: ChangePasswordScreen = () => {
  const { values, handleChange } = useFormState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const InputLeftElement = useMemo(
    () => (
      <View style={styles.icon}>
        <PasswordIcon width={iconSize} height={iconSize} />
      </View>
    ),
    [],
  );

  const commonInputProps = {
    keyboardType: 'default',
    autoCapitalize: 'none',
    containerStyle: styles.inputContainer,
    textInputStyle: styles.textInput,
    InputLeftElement,
  } as Partial<InputProps>;

  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2" style={styles.title}>
        Change Password
      </Typography>

      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            {...commonInputProps}
            placeholder="Current Password"
            key="currentPassword"
            value={values.currentPassword}
            onChangeText={handleChange('currentPassword')}
          />
          <Input
            {...commonInputProps}
            placeholder="New Password"
            key="newPassword"
            value={values.newPassword}
            onChangeText={handleChange('newPassword')}
          />
          <Input
            {...commonInputProps}
            placeholder="Confirm Password"
            key="confirmPassword"
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
          />
        </View>
        <Button variant="contained" color="primary" title="Change Password" />
      </View>
    </MainLayout>
  );
};

export default ChangePassword;
