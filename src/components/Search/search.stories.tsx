import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Search from './Search';
import searchConfig from './search.config';

export default {
  title: 'Search',
  component: Search,
} as Meta<typeof Search>;

export const { playground } = setupComponentStories(searchConfig);
