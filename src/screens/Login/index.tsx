import { View, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import type { PublicNavigatorParamList } from 'navigation/types';
import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import Input from 'components/Input';
import { Colors, Spacing } from 'styles';
import Button from 'components/Button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import FacebookIcon from 'assets/svgs/facebook.svg';
import GoogleIcon from 'assets/svgs/google.svg';
import MailIcon from 'assets/svgs/mail.svg';
import PasswordIcon from 'assets/svgs/password.svg';

import { moderateScale } from 'utils/styles';
import useBlockBackPress from 'hooks/use-block-back-press';
import useFormState from 'hooks/use-form-state';
import TopBackground from 'components/TopBackground';

import styles from './styles';

const iconSize = moderateScale(20);

export type LoginProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.LOGIN
>;

export type LoginScreen = React.FC<LoginProps>;

const Login: LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  
  const { values, handleChange } = useFormState({ email: '', password: '' });

  useBlockBackPress(navigation);

  return (
    <KeyboardAwareScrollView
      style={styles.keyboardAwareScrollView}
      contentContainerStyle={styles.container}
      pagingEnabled
    >
      <TopBackground type="auth" />
      <View style={styles.contentContainer}>
        <Typography style={styles.title} variant="heading2">
          Login To Your Account
        </Typography>
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          value={values.email}
          key="email"
          onChangeText={handleChange('email')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          InputLeftElement={
            <View>
              <MailIcon width={iconSize} height={iconSize} />
            </View>
          }
        />
        <Input
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Password"
          key="password"
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
        <Typography
          style={{
            textAlign: 'center',
            paddingVertical: Spacing.vertical.size12,
            fontWeight: 'bold'
          }}
          variant="caption"
        >
          Forgot Your Password?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          title="Login"
          onPress={() => {
            navigation.navigate(NAVIGATORS.CORE, {
              screen: NAVIGATORS.MENU,
              params: { screen: SCREENS.HOME },
            });
          }}
          style={{ button: { width: '100%' } }}
        />
        <Pressable
          style={styles.registerHere}
          onPress={() => navigation.navigate(SCREENS.SIGNUP)}
        >
          <Typography variant="caption">No Account yet? </Typography>
          <Typography variant="caption" style={{ color: Colors.red, fontWeight: 'bold' }}>
            Register Here
          </Typography>
        </Pressable>
        <View style={styles.authMethods}>
          <TouchableOpacity style={styles.authMethodBtn}>
            <FacebookIcon
              width={moderateScale(25)}
              height={moderateScale(25)}
            />
            <Typography variant="body3">Facebook</Typography>
          </TouchableOpacity>

          <TouchableOpacity style={styles.authMethodBtn}>
            <GoogleIcon width={moderateScale(25)} height={moderateScale(25)} />
            <Typography variant="body3">Google</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Login;
