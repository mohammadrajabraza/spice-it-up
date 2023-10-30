/* eslint-disable no-restricted-imports  */
import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import type { MainNavigationParamList } from 'navigation/types';

const useNavigation = () =>
  useNativeNavigation<StackNavigationProp<MainNavigationParamList>>();

export default useNavigation;
