import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { EditProfile, Profile } from 'screens';

const ProfileStack = createStackNavigator<ProfileNavigatorParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}
    >
      <ProfileStack.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        key={SCREENS.PROFILE}
      />
      <ProfileStack.Screen
        name={SCREENS.EDIT_PROFILE}
        component={EditProfile}
        key={SCREENS.EDIT_PROFILE}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
