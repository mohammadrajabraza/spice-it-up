import { StyleSheet } from "react-native";
import { Layouts, Colors, Spacing, Dimensions } from 'styles'
import { moderateScale } from "utils/styles";

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  wrapper: {
    ...Layouts.over,
    top: Dimensions.height.size12,
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    gap: Spacing.horizontal.size16,
  },
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  menuItemContainer: {
    marginBottom: Spacing.vertical.size12
  },  
  menuItemPrice: {
    fontSize: moderateScale(16)
  }
})

export default styles;