import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';

import { useTranslation } from 'context/locales';
import type { PublicNavigatorParamList } from 'navigation/types';
import type { WELCOME } from 'constants/screen-names';

import { AppText, Container } from './styles';
import Typography from 'components/Typography';

type WelcomeProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof WELCOME
>;

type WelcomeScreen = React.FC<WelcomeProps>;

const Welcome: WelcomeScreen = () => {
  const { t } = useTranslation('global');
  return (
    <Container>
      <Typography variant="heading2">{t('appName')}</Typography>
    </Container>
  );
};

export default Welcome;
