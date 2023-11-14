import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import assets from 'assets';

import Typography from 'components/Typography';
import Button from 'components/Button';
import { Colors } from 'styles';

import styles from './styles';

type OrderSuccessProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.ORDER_SUCCESS
>;

type OrderSuccessScreen = React.FC<OrderSuccessProps>;

const OrderSuccess: OrderSuccessScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={assets.images.authBackground}
      resizeMode="contain"
      style={styles.background}
    >
      <Image
        source={assets.images.success}
        resizeMode="contain"
        style={styles.successImage}
      />
    </ImageBackground>
    <View style={styles.contentContainer}>
      <View style={styles.content}>
        <Typography variant="heading1" style={styles.heading}>
          Congrats!
        </Typography>
        <Typography variant="heading2" style={styles.text}>
          Your Order is Placed
        </Typography>
      </View>
      <Button
        variant="contained"
        color="primary"
        title="Track Order"
        style={{ text: { color: Colors.white } }}
        onPress={() => {
          navigation.navigate(SCREENS.ORDER_STATUS);
        }}
      />
    </View>
  </View>
);

export default OrderSuccess;
