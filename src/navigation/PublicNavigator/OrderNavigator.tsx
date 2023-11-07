import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { OrderList } from 'screens';

const OrderStack = createStackNavigator<OrderNavigatorParamList>();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <OrderStack.Screen
        name={SCREENS.ORDER_LIST}
        component={OrderList}
        key={SCREENS.ORDER_LIST}
      />
    </OrderStack.Navigator>
  );
};

export default OrderNavigator;
