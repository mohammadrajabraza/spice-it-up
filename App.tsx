/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Platform, StatusBar, StyleSheet } from 'react-native';

import LocalesProvider from 'context/locales';
import useCurrentLocale from 'hooks/use-current-locale';
import Navigation from 'navigation';

import { Colors } from 'styles';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'jotai';
import store from 'store';

const styles = StyleSheet.create({
  android: {
    flex: 1,
  },
  ios: {
    flex: 1,
    marginTop: 18,
  },
});

const theme = {
  colors: Colors,
};

const App: React.FC = () => {
  const { selectedLocale } = useCurrentLocale();

  const rootStyles = Platform.OS === 'android' ? styles.android : styles.ios;

  return (
    <GestureHandlerRootView style={rootStyles}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <SafeAreaProvider>
        <Provider store={store}>
          <LocalesProvider defaultLocale="en" locale={selectedLocale}>
            <ThemeProvider theme={theme}>
              <Navigation />
            </ThemeProvider>
          </LocalesProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
