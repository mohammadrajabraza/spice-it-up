import { StyleSheet } from "react-native";
import { Colors, Dimensions, Spacing, Layouts } from "styles";
import { moderateScale } from "utils/styles";

const styles = StyleSheet.create({
  container: {
    ...Layouts.centered,
    gap: 15,
    flex: 0.9,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding
  },
  imageContainer: {
    width: Dimensions.width.size25,
    height: Dimensions.width.size25,
    borderRadius: Dimensions.width.size25,
    ...Layouts.centered,
    backgroundColor: `${Colors.red}10`,
  },
  title: {
    color: Colors.red,
    fontSize: moderateScale(30),
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    width: Dimensions.width.size70,
  },
  button: {
    marginTop: Spacing.vertical.size20,
  },
})

export default styles;