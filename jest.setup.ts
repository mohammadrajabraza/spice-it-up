/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
// import 'react-native-gesture-handler/jestSetup';

// require('react-native-reanimated/src/reanimated2/jestUtils').setUpTests();

// jest.mock('react-native-reanimated', () =>
//   require('react-native-reanimated/mock'),
// );

jest.useFakeTimers();
// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
