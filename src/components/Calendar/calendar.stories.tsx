import { Meta } from '@storybook/react-native';
import Calendar from './Calendar';
import setupComponentStories from 'storybook/utils/setup-component-stories';
import calendarConfig from './calendar.config';

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta<typeof Calendar>;

export const { playground } = setupComponentStories(calendarConfig);
