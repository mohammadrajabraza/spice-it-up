import styled, { css } from 'styled-components/native';
import { PressAnimation, PressableProps } from './pressable.types';

export const pressAbleFeedbackStyles: Record<
  PressAnimation,
  ReturnType<typeof css>
> = {
  fade: css`
    opacity: 0.85;
  `,
  scale: css`
    transform: scale(1.01);
  `,
  shadow: css`
    background-color: ${(props) => props.theme.colors.grey100};
  `,
};

export const StyledPressable = styled.Pressable<
  Omit<
    PressableProps,
    'throttleDuration' | 'throttleSettings' | 'hapticFeedbackLevel'
  >
>`
  ${(props) =>
    props.pressAnimation && pressAbleFeedbackStyles[props.pressAnimation]}
`;
