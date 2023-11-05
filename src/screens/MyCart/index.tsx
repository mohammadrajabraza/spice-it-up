import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import styles from './styles';
import Typography from 'components/Typography';
import assets from 'assets';
import strings from 'utils/strings';
import data from 'data';
import CartItem from 'components/CartItem';
import { Spacing } from 'styles';
import Button from 'components/Button';
import MainLayout from 'layouts/MainLayout';

type MyCartProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.MY_CART
>;

type MyCartScreen = React.FC<MyCartProps>;

const transferMethods = ['delivery', 'pickup'];

const getCartItems = () => data.cartItems;

const MyCart: MyCartScreen = ({ navigation }) => {
  const [selectedTransferMethod, setSelectedTransferMethod] =
    useState('delivery');

  const cartItems = getCartItems();

  const [cartItemsQuantity, setCartItemsQuantity] = useState(() => {
    return Object.fromEntries(
      cartItems.map((cartItem) => [cartItem.id, cartItem.quantity]),
    );
  });

  const onIncrementQuantity = (id: number) => {
    setCartItemsQuantity((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  const onDecrementQuantity = (id: number) => {
    setCartItemsQuantity((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  return (
    <MainLayout type="core" showBackIcon scrollView>
      <Typography variant="heading2">My Cart</Typography>

      <View style={styles.transferMethodRow}>
        {transferMethods.map((transferMethod) => (
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
              source={assets.images.delivery}
              style={styles.transferMethodImage}
              resizeMode="contain"
            />
            <Typography variant="body2">
              {strings.capitalizeFirstLetter(transferMethod)}
            </Typography>
          </TouchableOpacity>
        ))}
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

      <ImageBackground
        source={assets.images.subtotalCardBg}
        style={styles.cartTotalCard}
      >
        <View style={styles.cartTotalRow}>
          <Typography variant="body3" style={styles.cartTotalRowHeading}>
            Sub-total
          </Typography>
          <Typography variant="heading3" style={styles.cartTotalRowContent}>
            120 $
          </Typography>
        </View>
        <View style={styles.cartTotalRow}>
          <Typography variant="body3" style={styles.cartTotalRowHeading}>
            Delivery Charge
          </Typography>
          <Typography variant="heading3" style={styles.cartTotalRowContent}>
            10 $
          </Typography>
        </View>
        <View style={styles.cartTotalRow}>
          <Typography variant="body3" style={styles.cartTotalRowHeading}>
            Discount
          </Typography>
          <Typography variant="heading3" style={styles.cartTotalRowContent}>
            20 $
          </Typography>
        </View>
        <View
          style={[styles.cartTotalRow, { marginTop: Spacing.vertical.size8 }]}
        >
          <Typography variant="body1" style={styles.cartTotalRowHeading}>
            Total
          </Typography>
          <Typography variant="heading2" style={styles.cartTotalRowContent}>
            10 $
          </Typography>
        </View>

        <Button
          variant="contained"
          color="white"
          title="Proceed To Checkout"
          style={{
            button: styles.checkoutButton,
            text: styles.checkoutButtonText,
          }}
          onPress={() => {
            navigation.navigate(SCREENS.LOCATION)
          }}
        />
      </ImageBackground>
    </MainLayout>
  );
};

export default MyCart;
