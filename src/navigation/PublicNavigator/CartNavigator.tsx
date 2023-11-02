import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { MyCart } from 'screens';

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
    </CartStack.Navigator>
  );
};

export default CartNavigator;
