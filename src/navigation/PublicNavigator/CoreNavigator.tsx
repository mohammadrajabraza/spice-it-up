import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoreNavigatorParamList } from 'navigation/types';
import TabBar from 'components/TabBar';
import {
  CoreNavigatorsComponentMap,
  CoreNavigatorsInitialScreen,
  CoreNavigatorsKeys,
} from 'navigation/constants';

const BottomTab = createBottomTabNavigator<CoreNavigatorParamList>();

type BottomTabScreenProps = React.ComponentProps<typeof BottomTab.Screen>;

const routes: Array<BottomTabScreenProps> = CoreNavigatorsKeys.map((key) => {
  return {
    name: key,
    component: CoreNavigatorsComponentMap[key],
    initialParams: { screen: CoreNavigatorsInitialScreen[key] },
  };
});

const CoreNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      {routes.map((route) => (
        <BottomTab.Screen key={route.name} {...route} />
      ))}
    </BottomTab.Navigator>
  );
};

export default CoreNavigator;
