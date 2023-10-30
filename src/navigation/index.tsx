import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigation } from '@react-navigation/stack';

import DevNavigation from 'navigation/DevNavigator';
import PublicNavigation from 'navigation/PublicNavigator';

import useInitNavigation from 'navigation/use-init-navigation';

import type { MainNavigationParamList } from 'navigation/types';
import { DEV, PUBLIC } from 'constants/screen-names';

const Stack = createStackNavigation<MainNavigationParamList>();

const Navigation = () => {
  const { handleNavigationRef, onStateChange } = useInitNavigation();

  return (
    <NavigationContainer
      ref={handleNavigationRef}
      onStateChange={onStateChange}
    >
      <Stack.Navigation
        initialRouteName={PUBLIC}
        screenOptions={{ gestureEnabled: false, headerShown: false }}
      >
        <Stack.Screen name={PUBLIC} component={PublicNavigation} />
        <Stack.Screen name={DEV} component={DevNavigation} />
      </Stack.Navigation>
    </NavigationContainer>
  );
};

export default Navigation;
