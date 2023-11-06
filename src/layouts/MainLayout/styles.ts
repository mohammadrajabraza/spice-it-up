import { StyleSheet } from "react-native";
import { Layouts, Colors, Spacing, Dimensions, } from 'styles'


const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  wrapper: {
    // ...Layouts.over,
    backgroundColor: 'transparent',
  },
  content: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: 'transparent',
    gap: Spacing.horizontal.size16,
  },
})

export default styles;
