import type { ComponentConfig } from 'storybook/utils/component-config';

import { Pressable } from '.';

export default {
  argTypes: {
    hapticFeedbackLevel: {
      control: {
        options: [
          'selection',
          'impactLight',
          'impactMedium',
          'impactHeavy',
          'soft',
          'notificationSuccess',
          'notificationWarning',
          'notificationError',
          'clockTick',
        ],
        type: 'select',
      },
    },
    pressAnimation: {
      control: {
        options: ['fade', 'scale', 'shadow'],
        type: 'select',
      },
    },
  },
  component: Pressable,
  props: {
    ur: {},
    en: {
      hapticFeedbackLevel: 'impactHeavy',
      pressAnimation: 'fade',
      variant: 'alternative',
    },
  },
  title: 'Pressable',
} as ComponentConfig<typeof Pressable>;
