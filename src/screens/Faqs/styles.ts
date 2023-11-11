import { StyleSheet } from "react-native";
import { Colors, Spacing } from "styles";
import { moderateScale } from "utils/styles";

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  faq: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    marginBottom: Spacing.vertical.size12,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size16,
  },
  faqBody: {
    paddingHorizontal: Spacing.horizontal.size16,
    paddingVertical: Spacing.vertical.size16,
  },
  question: {
    fontWeight: '500'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.grey,
  },
  answer: {
    lineHeight: moderateScale(16)
  }
})

export default styles;