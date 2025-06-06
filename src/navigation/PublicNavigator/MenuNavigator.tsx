import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { Home, MenuItem, MenuList } from 'screens';

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
      <MenuStack.Screen
        name={SCREENS.MENU_LIST}
        component={MenuList}
        key={SCREENS.MENU_LIST}
      />
      <MenuStack.Screen
        name={SCREENS.MENU_ITEM}
        component={MenuItem}
        key={SCREENS.MENU_ITEM}
      />
    </MenuStack.Navigator>
  );
};

export default MenuNavigator;
