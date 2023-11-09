import { View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import styles from './styles';
import Typography from 'components/Typography';
import useFormState from 'hooks/use-form-state';
import Input from 'components/Input';
import Button from 'components/Button';
import PhoneInput from 'components/PhoneInput';

import CheckBox from '@react-native-community/checkbox';
import { Colors } from 'styles';
import TopBackground from 'components/TopBackground';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'assets/svgs/user.svg';
import MailIcon from 'assets/svgs/mail.svg';
import PasswordIcon from 'assets/svgs/password.svg';
import { moderateScale } from 'utils/styles';
import { ICountry } from 'react-native-international-phone-number';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type SignupProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.SIGNUP
>;

export type SignupScreen = React.FC<SignupProps>;

const iconSize = moderateScale(20);

const Signup: SignupScreen = () => {
  const { values, handleChange } = useFormState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: null as ICountry | null,
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      // pagingEnabled
    >
      <TopBackground showBackIcon type="auth" />
      <View style={styles.content}>
        <Typography style={styles.title} variant="heading2">
          Create Account
        </Typography>
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Full Name"
          key={'fullName'}
          value={values.fullName}
          onChangeText={handleChange('fullName')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          InputLeftElement={
            <View>
              <UserIcon width={iconSize} height={iconSize} />
            </View>
          }
        />
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          value={values.email}
          key={'email'}
          onChangeText={handleChange('email')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          InputLeftElement={
            <View>
              <MailIcon width={iconSize} height={iconSize} />
            </View>
          }
        />
        <PhoneInput
          value={values.phone}
          onChangePhoneNumber={handleChange('phone')}
          selectedCountry={values.country}
          onChangeSelectedCountry={handleChange('country')}
        />
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Password"
          key={'password'}
          value={values.password}
          onChangeText={handleChange('password')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          secureTextEntry={showPassword}
          InputLeftElement={
            <View>
              <PasswordIcon width={iconSize} height={iconSize} />
            </View>
          }
          InputRightElement={
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
              <FontAwesomeIcon
                name={showPassword ? 'eye' : 'eye-slash'}
                color={Colors.darkGrey}
                size={iconSize}
              />
            </TouchableOpacity>
          }
        />
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Confirm Password"
          key={'confirmPassword'}
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          secureTextEntry={showConfirmPassword}
          InputLeftElement={
            <View>
              <PasswordIcon width={iconSize} height={iconSize} />
            </View>
          }
          InputRightElement={
            <TouchableOpacity
              onPress={() => setShowConfirmPassword((prev) => !prev)}
            >
              <FontAwesomeIcon
                name={showConfirmPassword ? 'eye' : 'eye-slash'}
                color={Colors.darkGrey}
                size={iconSize}
              />
            </TouchableOpacity>
          }
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            disabled={false}
            value={values.agreeToTerms}
            onValueChange={handleChange('agreeToTerms')}
            style={styles.checkbox}
            boxType="square"
            onCheckColor={Colors.white}
            onFillColor={Colors.primary}
            onTintColor={Colors.primary}
            tintColor={Colors.darkGrey}
            onAnimationType="bounce"
            offAnimationType="bounce"
          />
          <View style={styles.checkBoxTextContainer}>
            <Typography variant="body3">I agree on the</Typography>
            <Typography variant="body3" style={styles.redText}>
              Terms
            </Typography>
            <Typography variant="body3"> and </Typography>
            <Typography variant="body3" style={styles.redText}>
              Privacy Policy
            </Typography>
          </View>
        </View>
        <Button
          variant="contained"
          color="primary"
          title="Register"
          style={{
            button: styles.registerBtn,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Signup;
