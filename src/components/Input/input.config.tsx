import { ComponentConfig } from 'storybook/utils/component-config';
import Input from './Input';

export default {
  argTypes: {},
  props: {
    ur: {},
    en: {
      // label: 'Email',
      placeholder: 'Enter your email',
      // type: 'text',
    },
  },
  title: 'Input',
  component: Input,
} satisfies ComponentConfig<typeof Input>;
