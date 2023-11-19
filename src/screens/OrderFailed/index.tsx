import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { CartNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';
import assets from 'assets';

import Typography from 'components/Typography';
import Button from 'components/Button';
import { Colors } from 'styles';

import styles from './styles';

type OrderFailedProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.ORDER_FAILED
>;

type OrderFailedScreen = React.FC<OrderFailedProps>;

const OrderFailed: OrderFailedScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={assets.images.authBackground}
      resizeMode="contain"
      style={styles.background}
    >
      <Image
        source={assets.images.failed}
        resizeMode="contain"
        style={styles.successImage}
      />
    </ImageBackground>
    <View style={styles.contentContainer}>
      <View style={styles.content}>
        <Typography variant="heading1" style={styles.heading}>
          Failed
        </Typography>
        <Typography variant="heading2" style={styles.text}>
          {'Oops! Something went\nterribly wrong.'}
        </Typography>
      </View>
      <Button
        variant="contained"
        color="primary"
        title="Try Again"
        style={{
          text: { color: Colors.white },
        }}
      />
    </View>
  </View>
);

export default OrderFailed;
