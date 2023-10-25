import React from 'react';
import type {
  PressableProps as NativePressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type { ThrottleSettings } from 'lodash';
import type { HapticFeedbackTypes } from 'react-native-haptic-feedback';

export type PressAnimation = 'fade' | 'scale' | 'shadow';

export interface PressableProps extends NativePressableProps {
  throttleDuration?: number;
  throttleSettings?: ThrottleSettings;
  hapticFeedbackLevel?: HapticFeedbackTypes;
  style?: StyleProp<ViewStyle>;
  pressAnimation?: PressAnimation;
}

export type PressableComponent = React.FC<PressableProps>;
