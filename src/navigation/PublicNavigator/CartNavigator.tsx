import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import {
  ConfirmOrder,
  Feedback,
  Location,
  MyCart,
  OrderFailed,
  OrderStatus,
  OrderSuccess,
  PaymentMethod,
} from 'screens';

const CartStack = createStackNavigator<CartNavigatorParamList>();

const CartNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <CartStack.Screen
        name={SCREENS.MY_CART}
        component={MyCart}
        key={SCREENS.MY_CART}
      />
      <CartStack.Screen
        name={SCREENS.LOCATION}
        component={Location}
        key={SCREENS.LOCATION}
      />
      <CartStack.Screen
        name={SCREENS.PAYMENT_METHOD}
        component={PaymentMethod}
        key={SCREENS.PAYMENT_METHOD}
      />
      <CartStack.Screen
        name={SCREENS.CONFIRM_ORDER}
        component={ConfirmOrder}
        key={SCREENS.CONFIRM_ORDER}
      />
      <CartStack.Screen
        name={SCREENS.ORDER_SUCCESS}
        component={OrderSuccess}
        key={SCREENS.ORDER_SUCCESS}
      />
      <CartStack.Screen
        name={SCREENS.ORDER_FAILED}
        component={OrderFailed}
        key={SCREENS.ORDER_FAILED}
      />
      <CartStack.Screen
        name={SCREENS.ORDER_STATUS}
        component={OrderStatus}
        key={SCREENS.ORDER_STATUS}
      />

      <CartStack.Screen
        name={SCREENS.FEEDBACK}
        component={Feedback}
        key={SCREENS.FEEDBACK}
      />
    </CartStack.Navigator>
  );
};

export default CartNavigator;
