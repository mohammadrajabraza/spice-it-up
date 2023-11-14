import type { ComponentConfig } from 'storybook/utils/component-config';

import Calendar from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
  props: {
    ur: {},
    en: {},
  },
} satisfies ComponentConfig<typeof Calendar>;
