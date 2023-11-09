/** eslint-disable @typescript-eslint/no-explicit-any */
/** eslint-disable @typescript-eslint/ban-types */
import type {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type { StackNavigationOptions } from '@react-navigation/stack';

import type { SCREENS, NAVIGATORS } from 'constants/screen-names';

export type ScreensParamsList = {
  [SCREENS.DEV_MENU]: undefined;
  [SCREENS.DEV_STORY_BOOK]: undefined;
  [SCREENS.SPLASH]: undefined;
  [SCREENS.ONBOARDING]: undefined;
  [SCREENS.SIGNUP]: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.HOME]: undefined;
  [SCREENS.MENU_LIST]: { category: string };
  [SCREENS.MENU_ITEM]: { id: number };
  [SCREENS.MY_CART]: undefined;
  [SCREENS.LOCATION]: undefined;
  [SCREENS.PAYMENT_METHOD]: undefined;
  [SCREENS.CONFIRM_ORDER]: undefined;
  [SCREENS.ORDER_SUCCESS]: undefined;
  [SCREENS.ORDER_FAILED]: undefined;
  [SCREENS.ORDER_STATUS]: undefined;
  [SCREENS.FEEDBACK]: undefined;
  [SCREENS.ORDER_LIST]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.EDIT_PROFILE]: undefined;
  [SCREENS.CHANGE_PASSWORD]: undefined;
  [SCREENS.LANGUAGE]: undefined;
  [SCREENS.RESERVATION_LIST]: undefined;
  [SCREENS.CREATE_RESERVATION]: undefined;
  [SCREENS.RESERVATION_SUCCESS]: undefined;
};

export type DevScreens =
  | typeof SCREENS.DEV_MENU
  | typeof SCREENS.DEV_STORY_BOOK;

export type PublicScreens =
  | typeof SCREENS.SPLASH
  | typeof SCREENS.ONBOARDING
  | typeof SCREENS.SIGNUP
  | typeof SCREENS.LOGIN;

export type MenuScreens =
  | typeof SCREENS.HOME
  | typeof SCREENS.MENU_LIST
  | typeof SCREENS.MENU_ITEM;
export type MenuNavigatorParamList = Pick<ScreensParamsList, MenuScreens>;

export type CartScreens =
  | typeof SCREENS.MY_CART
  | typeof SCREENS.LOCATION
  | typeof SCREENS.PAYMENT_METHOD
  | typeof SCREENS.CONFIRM_ORDER
  | typeof SCREENS.ORDER_SUCCESS
  | typeof SCREENS.ORDER_FAILED
  | typeof SCREENS.ORDER_STATUS
  | typeof SCREENS.FEEDBACK;
export type CartNavigatorParamList = Pick<ScreensParamsList, CartScreens>;

export type OrderScreens = typeof SCREENS.ORDER_LIST;
export type OrderNavigatorParamList = Pick<ScreensParamsList, OrderScreens>;

export type ProfileScreens =
  | typeof SCREENS.PROFILE
  | typeof SCREENS.EDIT_PROFILE
  | typeof SCREENS.CHANGE_PASSWORD
  | typeof SCREENS.LANGUAGE;
export type ProfileNavigatorParamList = Pick<ScreensParamsList, ProfileScreens>;

export type ReservationScreens =
  | typeof SCREENS.RESERVATION_LIST
  | typeof SCREENS.CREATE_RESERVATION
  | typeof SCREENS.RESERVATION_SUCCESS;
export type ReservationNavigatorParamList = Pick<
  ScreensParamsList,
  ReservationScreens
>;

export type CoreNavigatorParamList = {
  [NAVIGATORS.MENU]: NavigatorScreenParams<MenuNavigatorParamList>;
  [NAVIGATORS.CART]: NavigatorScreenParams<CartNavigatorParamList>;
  [NAVIGATORS.ORDER]: NavigatorScreenParams<OrderNavigatorParamList>;
  [NAVIGATORS.PROFILE]: NavigatorScreenParams<ProfileNavigatorParamList>;
  [NAVIGATORS.RESERVATION]: NavigatorScreenParams<ReservationNavigatorParamList>;
};

export type PublicNavigatorParamList = Pick<
  ScreensParamsList,
  PublicScreens
> & {
  [NAVIGATORS.CORE]: NavigatorScreenParams<CoreNavigatorParamList>;
};

export type DevNavigatorParamList = Pick<ScreensParamsList, DevScreens>;

export type MainNavigatorParamList = {
  [NAVIGATORS.DEV]: NavigatorScreenParams<DevNavigatorParamList>;
  [NAVIGATORS.PUBLIC]: NavigatorScreenParams<PublicNavigatorParamList>;
};
export type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

export type DevScreenComponent = ScreenComponentType<DevNavigatorParamList>;
export type PublicScreenComponent =
  ScreenComponentType<PublicNavigatorParamList>;

type ScreenConfig<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  ScreenName extends keyof List = keyof List,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  component: React.FC<NativeStackScreenProps<List, ScreenName>>;
  options?: Options;
};

type NavigationRoutes<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  [ScreenName in keyof List]: ScreenConfig<List, ScreenName, Options>;
};

export type PublicRoutes = NavigationRoutes<
  PublicNavigatorParamList,
  NativeStackNavigationOptions
>;
export type DevRoutes = NavigationRoutes<
  DevNavigatorParamList,
  StackNavigationOptions
>;
