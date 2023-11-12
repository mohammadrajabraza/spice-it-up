import { ComponentConfig } from "storybook/utils/component-config";
import Search from "./Search";

export default {
  title: 'Search',
  component: Search,
  props: {
    ur: {},
    en: {}
  }
} satisfies ComponentConfig<typeof Search>