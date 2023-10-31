import { View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

const OrderStack = createStackNavigator<OrderNavigatorParamList>();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name={SCREENS.ORDER_LIST}
        component={View}
        key={SCREENS.ORDER_LIST}
      />
    </OrderStack.Navigator>
  );
};

export default OrderNavigator;
