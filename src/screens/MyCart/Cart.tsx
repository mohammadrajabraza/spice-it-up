import { Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import assets from 'assets';
import strings from 'utils/strings';
import CartItem from 'components/CartItem';

import styles from './styles';
import EmptyCart from './EmptyCart';
import data from 'data';
import { NavigationProp } from '@react-navigation/native';
import { CartNavigatorParamList } from 'navigation/types';
import CartSummary from 'components/CartSummary';

const transferMethods = ['delivery', 'pickup'] as const;

type CartProps = {
  navigation: NavigationProp<CartNavigatorParamList>;
  cartItems: typeof data.cartItems;
  isEmpty: boolean;
};

const Cart: React.FC<CartProps> = (props) => {
  const { navigation, cartItems, isEmpty } = props;

  const [selectedTransferMethod, setSelectedTransferMethod] =
    useState('delivery');

  const [cartItemsQuantity, setCartItemsQuantity] = useState(() =>
    Object.fromEntries(
      cartItems.map((cartItem) => [cartItem.id, cartItem.quantity]),
    ),
  );

  const onIncrementQuantity = (id: number) => {
    setCartItemsQuantity((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const onDecrementQuantity = (id: number) => {
    setCartItemsQuantity((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  if (isEmpty) return <EmptyCart />;

  return (
    <View style={styles.cart}>
      <View style={styles.transferMethodRow}>
        {transferMethods.map(
          (transferMethod: (typeof transferMethods)[number]) => (
            <TouchableOpacity
              style={[
                styles.transferMethodItem,
                selectedTransferMethod === transferMethod &&
                  styles.selectedTransferMethodItem,
              ]}
              key={transferMethod}
              onPress={() => setSelectedTransferMethod(transferMethod)}
            >
              <Image
                source={assets.images[transferMethod]}
                style={styles.transferMethodImage}
                resizeMode="contain"
              />
              <Typography variant="body2">
                {strings.capitalizeFirstLetter(transferMethod)}
              </Typography>
            </TouchableOpacity>
          ),
        )}
      </View>
      <View style={styles.cartItems}>
        {cartItems.map((cartItem) => (
          <CartItem
            {...cartItem}
            key={cartItem.id}
            quantity={cartItemsQuantity[cartItem.id]}
            onIncrement={() => onIncrementQuantity(cartItem.id)}
            onDecrement={() => onDecrementQuantity(cartItem.id)}
          />
        ))}
      </View>

      <CartSummary
        buttonText="Proceed to Checkout"
        onSubmit={() => navigation.navigate(SCREENS.LOCATION)}
      />
    </View>
  );
};

export default Cart;
