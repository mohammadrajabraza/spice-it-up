import { View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

const MenuStack = createStackNavigator<MenuNavigatorParamList>();

const MenuNavigation = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name={SCREENS.HOME} component={View} />
    </MenuStack.Navigator>
  );
};

export default MenuNavigation;
