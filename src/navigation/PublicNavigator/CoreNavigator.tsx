import { View } from 'react-native'
import React from 'react'

import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CoreNavigatorParamList } from 'navigation/types';
import { NAVIGATORS } from 'constants/screen-names';

const BottomTab = createBottomTabNavigator<CoreNavigatorParamList>();

const CoreNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={NAVIGATORS.MENU} component={View} />
    </BottomTab.Navigator>
  )
}

export default CoreNavigation