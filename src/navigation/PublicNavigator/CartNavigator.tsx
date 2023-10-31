import { View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

const CartStack = createStackNavigator<CartNavigatorParamList>();

const CartNavigator = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name={SCREENS.MY_CART}
        component={View}
        key={SCREENS.MY_CART}
      />
    </CartStack.Navigator>
  );
};

export default CartNavigator;
