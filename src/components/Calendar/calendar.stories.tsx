import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Calendar from './Calendar';
import calendarConfig from './calendar.config';

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta<typeof Calendar>;

export const { playground } = setupComponentStories(calendarConfig);
