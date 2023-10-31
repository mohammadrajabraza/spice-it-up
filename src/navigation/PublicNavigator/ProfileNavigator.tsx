import { View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

const ProfileStack = createStackNavigator<ProfileNavigatorParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={SCREENS.PROFILE_INFO}
        component={View}
        key={SCREENS.PROFILE_INFO}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
