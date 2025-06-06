import { View, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from 'components/Typography';
import assets from 'assets';
import Button from 'components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CoreNavigatorParamList } from 'navigation/types';
import { NAVIGATORS, SCREENS } from 'constants/screen-names';

const NoOrder = () => {
  const navigation = useNavigation<NavigationProp<CoreNavigatorParamList>>();

  return (
    <View style={styles.noOrderContainer}>
      <View style={styles.noOrderImageContainer}>
        <Image source={assets.images.noOrder} resizeMode="contain" />
      </View>
      <Typography variant="heading1" style={styles.noOrderTitle}>
        Oops, No Order Yet
      </Typography>
      <Typography variant="heading2" style={styles.noOrderDescription}>
        You haven’t ordered anything to display
      </Typography>
      <Button
        variant="contained"
        color="primary"
        title="Browse"
        style={{ button: styles.noOrderButton }}
        onPress={() => {
          navigation.navigate(NAVIGATORS.MENU, {
            screen: SCREENS.HOME,
          });
        }}
      />
    </View>
  );
};

export default NoOrder;
