import React from 'react';

import { StyledPressable } from './styles';
import { PressableComponent } from './pressable.types';

export const Pressable: PressableComponent = (props) => {
  const {
    throttleDuration = 1000,
    onPress,
    throttleSettings,
    hapticFeedbackLevel,
    style,
    ...others
  } = props;

  return <StyledPressable style={[style]} {...others} onPress={onPress} />;
};
