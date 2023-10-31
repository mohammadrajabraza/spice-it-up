const DEV = 'DevNavigatior';
const PUBLIC = 'PublicNavigatior';

const DEV_MENU = 'DevMenu';
const DEV_STORY_BOOK = 'DevStoryBook';

const CORE = 'CoreNavigatior';
const MENU = 'MenuNavigatior'
const ORDER = 'OrderNavigatior'
const RESERVATION = 'ReservationNavigatior'
const CART = 'CartNavigatior'
const PROFILE = 'ProfileNavigatior'

const SPLASH = 'Splash';
const ONBOARDING = 'Onboarding';
const SIGNUP = 'Signup';
const LOGIN = 'Login';
const HOME = 'Home';
const MY_CART = 'MyCart'
const ORDER_LIST = 'OrderList'
const RESERVATION_LIST = 'ReservationList'
const PROFILE_INFO = 'ProfileInfo'

export const NAVIGATORS = {
  DEV,
  PUBLIC,
  CORE,
  MENU,
  ORDER,
  RESERVATION,
  CART,
  PROFILE,
} as const

export const SCREENS = {
  DEV_MENU,
  DEV_STORY_BOOK,
  SPLASH,
  ONBOARDING,
  SIGNUP,
  LOGIN,
  HOME,
  MY_CART,
  ORDER_LIST,
  PROFILE_INFO,
  RESERVATION_LIST
} as const