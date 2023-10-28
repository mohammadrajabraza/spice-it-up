import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LOGIN, ONBOARDING, SIGNUP, SPLASH } from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import { Login, Onboarding, Signup, Splash } from 'screens';
import { useAtomValue } from 'jotai';
import { initialRouteNameAtom } from 'store/atoms';

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
    </Stack.Navigator>
  );
};
export default PublicNavigator;
