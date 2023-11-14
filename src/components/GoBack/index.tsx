import { TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from 'assets/svgs/back.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';

const size = moderateScale(18);

const GoBack = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    if (!navigation.canGoBack()) return undefined;
    return navigation.goBack();
  };

  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      onPress={onGoBack}
      style={[styles.container, { top: insets.top }]}
    >
      <BackIcon width={size} height={size} />
    </TouchableOpacity>
  );
};

export default GoBack;
