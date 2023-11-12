import { ComponentConfig } from 'storybook/utils/component-config';
import Counter from './Counter';
import React from 'react';

const CounterStory = () => {
  const [count, setCount] = React.useState(1);
  return (
    <Counter
      count={count}
      onIncrement={() => setCount(count + 1)}
      onDecrement={() => setCount(count - 1)}
    />
  );
};

export default {
  title: 'Counter',
  component: CounterStory,
  props: {
    ur: {},
    en: {},
  },
} satisfies ComponentConfig<typeof CounterStory>;
