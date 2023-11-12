import { Meta } from "@storybook/react-native";
import Button from "./Button";
import setupComponentStories from "storybook/utils/setup-component-stories";
import buttonConfig from "./button.config";

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>

export const { variants, playground } = setupComponentStories(buttonConfig)