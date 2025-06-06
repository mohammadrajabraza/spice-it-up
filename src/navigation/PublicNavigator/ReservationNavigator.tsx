import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReservationNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { ReservationList } from 'screens';

const ReservationStack = createStackNavigator<ReservationNavigatorParamList>();

const ReservationNavigator = () => {
  return (
    <ReservationStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}
    >
      <ReservationStack.Screen
        name={SCREENS.RESERVATION_LIST}
        component={ReservationList}
        key={SCREENS.RESERVATION_LIST}
      />
    </ReservationStack.Navigator>
  );
};

export default ReservationNavigator;
