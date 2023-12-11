import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useStore } from 'jotai';

import { ImageBackground } from 'react-native';

import DeviceInfo from 'react-native-device-info';

import type { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

import assets from 'assets';
import useBootstrapApp from 'hooks/use-bootstrap-app';

import Storage from 'utils/storage';
import { ONBOARDING_COMPLETE } from 'constants/storage';
import { initialRouteNameAtom } from 'store/atoms';

import { Dimensions } from 'styles';

import Typography from 'components/Typography';

import { Container, SplashLogo } from './styles';

type SplashProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.SPLASH
>;

type SplashScreen = React.FC<SplashProps>;

const Splash: SplashScreen = ({ navigation }) => {
  const store = useStore();
  useBootstrapApp({
    async onComplete() {
      const isOnboardingComplete = await Storage.get(ONBOARDING_COMPLETE);
      const initialRouteName: keyof PublicNavigatorParamList =
        isOnboardingComplete ? SCREENS.LOGIN : SCREENS.ONBOARDING;
      store.set(initialRouteNameAtom, initialRouteName);
      return navigation.navigate(initialRouteName);
    },
  });

  return (
    <Container>
      <ImageBackground
        source={assets.images.authBackground}
        style={{
          width: Dimensions.width.size100,
          height: Dimensions.height.size45,
          alignItems: 'center',
          paddingTop: Dimensions.height.size50,
        }}
        resizeMode="cover"
      >
        <SplashLogo
          source={assets.images.splashLogo}
          alt="Splash logo"
          resizeMode="contain"
        />
      </ImageBackground>
      <Typography
        variant="body3"
        style={{ position: 'absolute', bottom: 30 }}
      >
        {`Version v${  DeviceInfo.getVersion()}`}
      </Typography>
    </Container>
  );
};

export default Splash;
