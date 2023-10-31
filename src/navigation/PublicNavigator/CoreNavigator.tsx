import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CoreNavigatorParamList } from 'navigation/types';
import { NAVIGATORS } from 'constants/screen-names';
import MenuNavigator from './MenuNavigator';
import TabBar from 'components/TabBar';
import CartNavigator from './CartNavigator';
import OrderNavigator from './OrderNavigator';
import ReservationNavigator from './ReservationNavigator';
import ProfileNavigator from './ProfileNavigator';

const BottomTab = createBottomTabNavigator<CoreNavigatorParamList>();

type BottomTabScreenProps = React.ComponentProps<typeof BottomTab.Screen>;


const routes: Array<BottomTabScreenProps> = [
  {
    name: NAVIGATORS.MENU,
    component: MenuNavigator,
  },
  {
    name: NAVIGATORS.ORDER,
    component: OrderNavigator,
  },
  {
    name: NAVIGATORS.RESERVATION,
    component: ReservationNavigator,
  },
  {
    name: NAVIGATORS.CART,
    component: CartNavigator,
  },
  {
    name: NAVIGATORS.PROFILE,
    component: ProfileNavigator,
  },
] as const;

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
