import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReservationNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { ReservationList, CreateReservation } from 'screens';

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
      <ReservationStack.Screen
        name={SCREENS.CREATE_RESERVATION}
        component={CreateReservation}
        key={SCREENS.CREATE_RESERVATION}
      />
    </ReservationStack.Navigator>
  );
};

export default ReservationNavigator;
