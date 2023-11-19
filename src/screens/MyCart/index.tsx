import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import MainLayout from 'layouts/MainLayout';
import Cart from './Cart';
import data from 'data';
import { View } from 'react-native';
import Radio from 'components/Radio';
import styles from './styles';

type MyCartProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.MY_CART
>;

type MyCartScreen = React.FC<MyCartProps>;

const getCartItems = () => data.cartItems as typeof data.cartItems;

const MyCart: MyCartScreen = ({ navigation }) => {
  const cartItems = getCartItems();
  const [isEmpty, setIsEmpty] = useState(cartItems.length === 0);
  return (
    <MainLayout type="core" showBackIcon scrollView={!isEmpty}>
      <View style={styles.cartHeader}>
        <Typography variant="heading2">My Cart</Typography>
        <View style={styles.emptyRadio}>
          <Typography variant="caption">Show Empty</Typography>
          <Radio
            selected={isEmpty}
            onPress={() => setIsEmpty((isPrevEmpty: boolean) => !isPrevEmpty)}
          />
        </View>
      </View>
      <Cart navigation={navigation} cartItems={cartItems} isEmpty={isEmpty} />
    </MainLayout>
  );
};

export default MyCart;
