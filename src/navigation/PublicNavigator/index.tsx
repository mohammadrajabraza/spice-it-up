import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAtomValue } from 'jotai';

import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import { Login, Onboarding, Signup, Splash } from 'screens';
import { initialRouteNameAtom } from 'store/atoms';

import CoreNavigator from './CoreNavigator';

const { LOGIN, ONBOARDING, SIGNUP, SPLASH } = SCREENS;

const Stack = createNativeStackNavigator<PublicNavigatorParamList>();

const PublicNavigator = () => {
  const initialRouteName = useAtomValue(initialRouteNameAtom);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SPLASH} component={Splash} key={SPLASH} />

      {initialRouteName === ONBOARDING ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ONBOARDING}
            component={Onboarding}
            key={ONBOARDING}
          />
        </Stack.Group>
      ) : null}
      <Stack.Screen name={SIGNUP} component={Signup} key={SIGNUP} />
      <Stack.Screen name={LOGIN} component={Login} key={LOGIN} />

      <Stack.Screen
        name={NAVIGATORS.CORE}
        component={CoreNavigator}
        key={NAVIGATORS.CORE}
      />
    </Stack.Navigator>
  );
};
export default PublicNavigator;
