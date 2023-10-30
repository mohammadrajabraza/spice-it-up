import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigation,
} from '@react-navigation/stack';

import type {
  DevNavigationParamList,
  DevScreenComponent,
} from 'navigation/types';
import { DEV_MENU } from 'constants/screen-names';

import routes from './routes';

const Stack = createStackNavigation<DevNavigationParamList>();

const devNavigationRoutes = Object.entries(routes);

const DevNavigation = (): JSX.Element => (
  <Stack.Navigation
    initialRouteName={DEV_MENU}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: false,
      headerShown: true,
    }}
  >
    {devNavigationRoutes.map(([key, options]) => (
      <Stack.Screen
        key={key}
        name={key as keyof DevNavigationParamList}
        component={options.component as DevScreenComponent}
        options={options.options}
      />
    ))}
  </Stack.Navigation>
);

export default DevNavigation;
