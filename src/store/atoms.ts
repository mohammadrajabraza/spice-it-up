import { atom } from 'jotai';

import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ONBOARDING_COMPLETE } from 'constants/storage';
import { PublicNavigatorParamList } from 'navigation/types';
import { SPLASH } from 'constants/screen-names';
import { AllOptionalKeys } from 'types/utils';
export const isOnboardingCompleteAtom = atomWithStorage(
  ONBOARDING_COMPLETE,
  false,
  createJSONStorage(() => AsyncStorage),
  { unstable_getOnInit: true },
);

export const initialRouteNameAtom =
  atom<AllOptionalKeys<PublicNavigatorParamList>>(SPLASH);
