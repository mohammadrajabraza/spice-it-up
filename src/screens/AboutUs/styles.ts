import { StyleSheet } from "react-native";
import { Spacing } from "styles";
import { moderateScale } from "utils/styles";

const styles = StyleSheet.create({
  title: {
    paddingBottom: Spacing.vertical.size12
  },
  content: {
    gap: Spacing.vertical.size12,
  },
  heading: {
    fontWeight: '500',
    paddingBottom: Spacing.vertical.size12,
  },
  paragraph: {
    lineHeight: moderateScale(17)
  },
  version: {
    textAlign: 'center',
    paddingVertical: Spacing.vertical.size12,
    marginVertical: Spacing.vertical.size32,
  }
})

export default styles;