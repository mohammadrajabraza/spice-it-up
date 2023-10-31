import { View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReservationNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

const ReservationStack = createStackNavigator<ReservationNavigatorParamList>();

const ReservationNavigator = () => {
  return (
    <ReservationStack.Navigator>
      <ReservationStack.Screen
        name={SCREENS.RESERVATION_LIST}
        component={View}
        key={SCREENS.RESERVATION_LIST}
      />
    </ReservationStack.Navigator>
  );
};

export default ReservationNavigator;
