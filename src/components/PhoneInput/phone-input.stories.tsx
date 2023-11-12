import { Meta } from "@storybook/react-native";
import PhoneInput from "./PhoneInput";
import setupComponentStories from "storybook/utils/setup-component-stories";

import phoneInputConfig from "./phone-input.config";

export default {
  title: 'PhoneInput',
  component: PhoneInput,
} as Meta<typeof PhoneInput>

export const { playground } = setupComponentStories(phoneInputConfig)