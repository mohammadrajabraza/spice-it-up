import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Colors } from 'styles';
import { moderateScale } from 'utils/styles';
import PlusIcon from 'assets/svgs/plus.svg';
import MinusIcon from 'assets/svgs/minus.svg';
import Typography from 'components/Typography';
import { CounterComponent } from './counter.types';

const iconSize = moderateScale(12);

const Counter: CounterComponent = (props) => {
  const {
    count: itemCount,
    onIncrement: increment,
    onDecrement: decrement,
    style,
  } = props;
  return (
    <View style={[styles.container, style?.container ?? {}]}>
      <TouchableOpacity
        style={[
          styles.changeCountBtn,
          { backgroundColor: `${Colors.primary}11` },
        ]}
        onPress={decrement}
        disabled={itemCount === 1}
      >
        <MinusIcon width={iconSize} height={iconSize} />
      </TouchableOpacity>
      <Typography variant="caption">{itemCount + ''}</Typography>

      <TouchableOpacity
        style={[styles.changeCountBtn, { backgroundColor: Colors.primary }]}
        onPress={increment}
      >
        <PlusIcon width={iconSize} height={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
