import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { Home } from 'screens';

const MenuStack = createStackNavigator<MenuNavigatorParamList>();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <MenuStack.Screen
        name={SCREENS.HOME}
        component={Home}
        key={SCREENS.HOME}
      />
    </MenuStack.Navigator>
  );
};

export default MenuNavigator;
