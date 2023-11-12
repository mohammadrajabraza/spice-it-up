import setupComponentStories from 'storybook/utils/setup-component-stories';
import typographyConfig from './typography.config';
import { Meta } from '@storybook/react-native';
import Typography from './Typography';

export default {
  title: 'Typography',
  component: Typography,
} as Meta<typeof Typography>;

export const { playground, variants } = setupComponentStories(typographyConfig);
