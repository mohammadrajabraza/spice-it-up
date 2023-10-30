import { View, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PublicNavigatorParamList } from 'navigation/types';
import { NAVIGATORS, SCREENS } from 'constants/screen-names';
import styles from './styles';
import Typography from 'components/Typography';
import Input from 'components/Input';
import { Colors, Spacing } from 'styles';
import Button from 'components/Button';

import FacebookIcon from 'assets/svgs/facebook.svg';
import GoogleIcon from 'assets/svgs/google.svg';

import { moderateScale } from 'utils/styles';
import useBlockBackPress from 'hooks/use-block-back-press';
import useFormState from 'hooks/use-form-state';
import AuthTopBackground from 'components/AuthTopBackground';

export type LoginProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.LOGIN
>;

export type LoginScreen = React.FC<LoginProps>;

const Login: LoginScreen = ({ navigation }) => {
  const { values, handleChange } = useFormState({ email: '', password: '' });

  useBlockBackPress();

  return (
    <View style={styles.container}>
      <AuthTopBackground />
      <View style={styles.contentContainer}>
        <Typography style={styles.title} variant="heading2">
          Login To Your Account
        </Typography>
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
        <Typography
          style={{
            textAlign: 'center',
            paddingVertical: Spacing.vertical.size12,
          }}
          variant="caption"
        >
          Forgot Your Password?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          title="Login"
          onPress={() =>
            navigation.navigate(NAVIGATORS.CORE, {
              screen: NAVIGATORS.MENU,
              params: { screen: SCREENS.HOME },
            })
          }
          style={{ button: { width: '100%' } }}
        />
        <Pressable
          style={styles.registerHere}
          onPress={() => navigation.navigate(SCREENS.SIGNUP)}
        >
          <Typography variant="body3">No Account Yet? </Typography>
          <Typography variant="body3" style={{ color: Colors.red }}>
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
    </View>
  );
};
export default Login;
