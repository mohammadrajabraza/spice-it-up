import { Meta } from "@storybook/react-native";
import Input from "./Input";
import setupComponentStories from "storybook/utils/setup-component-stories";
import inputConfig from "./input.config";

export default {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>

export const { playground, variants } = setupComponentStories(inputConfig)