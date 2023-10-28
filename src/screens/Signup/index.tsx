import { View, Image } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PublicNavigatorParamList } from 'navigation/types';
import { SIGNUP } from 'constants/screen-names';
import styles from './styles';
import { ImageBackground } from 'react-native';
import assets from 'assets';
import Typography from 'components/Typography';
import useFormState from 'hooks/use-form-state';
import Input from 'components/Input';
import Button from 'components/Button';

import CheckBox from '@react-native-community/checkbox';
import { Colors, Spacing } from 'styles';

export type SignupProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SIGNUP
>;

export type SignupScreen = React.FC<SignupProps>;

const Signup: SignupScreen = () => {
  const { values, handleChange } = useFormState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.images.authBackground}
        style={styles.authBackground}
        resizeMode="cover"
      >
        <Image source={assets.images.authLogo} style={styles.authLogo} />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Typography style={styles.title} variant="heading2">
          Create Account
        </Typography>
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Full Name"
          value={values.fullName}
          onChangeText={handleChange('fullName')}
        />
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          value={values.email}
          onChangeText={handleChange('email')}
        />
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange('password')}
        />
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 4,
            paddingVertical: Spacing.vertical.size4,
          }}
        >
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
          <View style={{ flexDirection: 'row' }}>
            <Typography variant="body3">I agree on the</Typography>
            <Typography variant="body3" style={{ color: Colors.red }}>
              Terms
            </Typography>
            <Typography variant="body3"> and </Typography>
            <Typography variant="body3" style={{ color: Colors.red }}>
              Privacy Policy
            </Typography>
          </View>
        </View>
        <Button
          variant="contained"
          color="primary"
          title="Register"
          style={{
            button: { width: '100%', marginTop: Spacing.vertical.size8 },
          }}
        />
      </View>
    </View>
  );
};
export default Signup;
