import type { ComponentConfig } from 'storybook/utils/component-config';
import Typography, { typographyVariants } from './Typography';

export default {
  argTypes: {
    variant: {
      control: {
        options: Object.keys(typographyVariants),
        type: 'select',
      },
    },
  },
  component: Typography,
  props: {
    ur: {},
    en: {
      text: 'This is a text',
      variant: 'heading2',
    },
  },
  title: 'Typography',
} as ComponentConfig<typeof Typography>;
