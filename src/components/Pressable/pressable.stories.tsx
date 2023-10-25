import type { ComponentMeta } from '@storybook/react';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import config from './pressable.config';
import { Pressable } from '.';

export default {
  component: Pressable,
  title: 'Pressable',
} as ComponentMeta<typeof Pressable>;

export const { playground, variants } =
  setupComponentStories<typeof Pressable>(config);
