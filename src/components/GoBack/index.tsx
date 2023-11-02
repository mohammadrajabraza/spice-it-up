import { TouchableOpacity } from 'react-native';
import React from 'react';
import BackIcon from 'assets/svgs/back.svg';
import { moderateScale } from 'utils/styles';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const size = moderateScale(18);

const GoBack = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    if (!navigation.canGoBack()) return;
    return navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onGoBack} style={styles.container}>
      <BackIcon width={size} height={size} />
    </TouchableOpacity>
  );
};

export default GoBack;
