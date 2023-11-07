import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';
import styles from './styles';
import { Image, View } from 'react-native';
import assets from 'assets';
import Button from 'components/Button';
import { Colors } from 'styles';

type OrderStatusProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.ORDER_STATUS
>;

type OrderStatusScreen = React.FC<OrderStatusProps>;

const cartItems = [
  {
    id: 1,
    name: 'Fresh Crab Soup',
    quantity: 2,
    price: 35,
  },
  {
    id: 2,
    name: 'Fresh Crab Soup',
    quantity: 3,
    price: 35,
  },
];

const OrderStatus: OrderStatusScreen = () => {
  return (
    <MainLayout type="core" showBackIcon>
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <View style={styles.title}>
            <Typography variant="heading2">Order #100045</Typography>
            <Typography variant="body2" style={styles.date}>
              25 Aug, 15:35
            </Typography>
          </View>

          <View style={styles.line} />

          <View style={styles.cartItemList}>
            {cartItems.map((cartItem) => {
              return (
                <View style={styles.cartItem} key={cartItem.id}>
                  <View style={styles.cartItemTop}>
                    <Typography variant="body2">{cartItem.name}</Typography>
                    <Typography variant="body2" style={styles.cartItemPrice}>
                      {'$ ' + cartItem.price}
                    </Typography>
                  </View>
                  <Typography variant="body3" style={styles.cartItemQuantity}>
                    {'Quantity x' + cartItem.quantity}
                  </Typography>
                </View>
              );
            })}
          </View>

          <View style={styles.line} />

          <View style={{ gap: 5 }}>
            <View style={styles.cartSummaryRow}>
              <Typography variant="body2">Sub-Total</Typography>
              <Typography variant="body2" style={styles.cartSummaryPrice}>
                $ 120
              </Typography>
            </View>

            <View style={styles.cartSummaryRow}>
              <Typography variant="body2">Delivery Charge</Typography>
              <Typography variant="body2" style={styles.cartSummaryPrice}>
                $ 10
              </Typography>
            </View>

            <View style={styles.cartSummaryRow}>
              <Typography variant="body2">Discount</Typography>
              <Typography variant="body2" style={styles.cartSummaryPrice}>
                $ 20
              </Typography>
            </View>

            <View style={styles.cartSummaryTotal}>
              <Typography variant="body2">Total</Typography>
              <Typography variant="body2" style={styles.cartSummaryPrice}>
                $ 20
              </Typography>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.cartSummaryRow}>
            <Typography variant="body2">Payment Method</Typography>
            <Image
              source={assets.images.paypal}
              resizeMode="contain"
              style={styles.paymentMethodImage}
            />
          </View>
        </View>
        <Button
          variant="contained"
          color="primary"
          title="Track Order"
          style={{
            text: { color: Colors.white },
            button: { marginTop: 'auto' },
          }}
        />
      </View>
    </MainLayout>
  );
};

export default OrderStatus;
