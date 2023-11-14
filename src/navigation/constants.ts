import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import CartNavigator from './PublicNavigator/CartNavigator';
import MenuNavigator from './PublicNavigator/MenuNavigator';
import OrderNavigator from './PublicNavigator/OrderNavigator';
import ProfileNavigator from './PublicNavigator/ProfileNavigator';
import ReservationNavigator from './PublicNavigator/ReservationNavigator';

export const CoreNavigatorsInitialScreen = {
  [NAVIGATORS.MENU]: SCREENS.HOME,
  [NAVIGATORS.CART]: SCREENS.MY_CART,
  [NAVIGATORS.ORDER]: SCREENS.ORDER_LIST,
  [NAVIGATORS.RESERVATION]: SCREENS.RESERVATION_LIST,
  [NAVIGATORS.PROFILE]: SCREENS.PROFILE,
};

export const CoreNavigatorsComponentMap = {
  [NAVIGATORS.MENU]: MenuNavigator,
  [NAVIGATORS.CART]: CartNavigator,
  [NAVIGATORS.ORDER]: OrderNavigator,
  [NAVIGATORS.RESERVATION]: ReservationNavigator,
  [NAVIGATORS.PROFILE]: ProfileNavigator,
};

export const CoreNavigatorsKeys = Object.keys(
  CoreNavigatorsComponentMap,
) as Array<keyof typeof CoreNavigatorsComponentMap>;
