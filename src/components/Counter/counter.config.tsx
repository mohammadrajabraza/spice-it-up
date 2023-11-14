import React from 'react';

import type { ComponentConfig } from 'storybook/utils/component-config';

import Counter from './Counter';

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
