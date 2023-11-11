/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Platform, StatusBar, StyleSheet } from 'react-native';

import LocalesProvider from 'context/locales';
import useCurrentLocale from 'hooks/use-current-locale';
import Navigation from 'navigation';

import { Colors, Layouts } from 'styles';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'jotai';
import store from 'store';
import BottomSheet from 'components/BottomSheet';
import { BottomSheetRefProps } from 'components/BottomSheet/BottomSheet';
import useBottomSheet from 'hooks/use-bottom-sheet';

const styles = StyleSheet.create({
  root: {
    ...Layouts.over,
  },
  android: {
    flex: 1,
  },
  ios: {
    flex: 1,
  },
});

const theme = {
  colors: Colors,
};

const App: React.FC = () => {
  const { selectedLocale } = useCurrentLocale();
  const rootStyles = Platform.OS === 'android' ? styles.android : styles.ios;

  const Sheet = useBottomSheet()

  return (
    <GestureHandlerRootView style={[styles.root, rootStyles]}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <SafeAreaProvider>
        <Provider store={store}>
          <LocalesProvider defaultLocale="en" locale={selectedLocale}>
            <ThemeProvider theme={theme}>
              <Navigation />
              <Sheet />
            </ThemeProvider>
          </LocalesProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
