/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useCallback, useImperativeHandle } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import Typography from 'components/Typography';
import { Colors } from 'styles';
import Button from 'components/Button';

import styles from './styles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetProps = {};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (_, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      'worklet';

      active.value = destination !== 0;

      translateY.value = withSpring(destination, { damping: 50 });
      /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    const isActive = useCallback(() => active.value, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP,
      );

      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    const rBackdropStyle = useAnimatedStyle(
      () => ({
        opacity: withTiming(active.value ? 1 : 0),
        /* eslint-disable react-hooks/exhaustive-deps */
      }),
      [],
    );

    const rBackdropProps = useAnimatedProps(
      () =>
        ({
          pointerEvents: active.value ? 'auto' : 'none',
        }) as any,
      [],
    );

    return (
      <>
        <Animated.View
          onTouchStart={() => {
            scrollTo(0);
          }}
          animatedProps={rBackdropProps}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            rBackdropStyle,
          ]}
        />
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <View style={styles.line} />
          <View style={styles.content}>
            <Typography variant="heading2" style={styles.heading}>
              Are you sure you want to Logout?
            </Typography>
            <View style={styles.buttons}>
              <Button variant="contained" color="primary" title="Logout" />
              <Button
                variant="outlined"
                color="darkGrey"
                title="Cancel"
                style={{ text: { color: Colors.black } }}
                onPress={() => scrollTo(0)}
              />
            </View>
          </View>
        </Animated.View>
      </>
    );
  },
);

export default BottomSheet;
