import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import counterConfig from './counter.config';
import Counter from './Counter';

export default {
  title: 'Counter',
  component: Counter,
} as Meta<typeof Counter>;

export const { playground } = setupComponentStories(counterConfig);
