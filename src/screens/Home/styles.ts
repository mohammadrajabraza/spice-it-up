import { StyleSheet } from "react-native";
import { Colors, Layouts, Spacing } from 'styles'


const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding
  }
})

export default styles;
