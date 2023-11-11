import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { EditProfile, Profile, ChangePassword, Language, Faqs, AboutUs } from 'screens';

const ProfileStack = createStackNavigator<ProfileNavigatorParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
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
      <ProfileStack.Screen
        name={SCREENS.CHANGE_PASSWORD}
        component={ChangePassword}
        key={SCREENS.CHANGE_PASSWORD}
      />
      <ProfileStack.Screen
        name={SCREENS.LANGUAGE}
        component={Language}
        key={SCREENS.LANGUAGE}
      />
      <ProfileStack.Screen
        name={SCREENS.FAQS}
        component={Faqs}
        key={SCREENS.FAQS}
      />
      <ProfileStack.Screen
        name={SCREENS.ABOUT_US}
        component={AboutUs}
        key={SCREENS.ABOUT_US}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
