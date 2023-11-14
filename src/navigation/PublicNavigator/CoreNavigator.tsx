import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { CoreNavigatorParamList } from 'navigation/types';
import TabBar from 'components/TabBar';
import {
  CoreNavigatorsComponentMap,
  CoreNavigatorsInitialScreen,
  CoreNavigatorsKeys,
} from 'navigation/constants';

const BottomTab = createBottomTabNavigator<CoreNavigatorParamList>();

type BottomTabScreenProps = React.ComponentProps<typeof BottomTab.Screen>;

const routes: Array<BottomTabScreenProps> = CoreNavigatorsKeys.map((key) => ({
  name: key,
  component: CoreNavigatorsComponentMap[key],
  initialParams: { screen: CoreNavigatorsInitialScreen[key] },
}));

const CoreNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={TabBar}
  >
    {routes.map((route) => (
      <BottomTab.Screen key={route.name} {...route} />
    ))}
  </BottomTab.Navigator>
);

export default CoreNavigator;
