import { StyleSheet } from 'react-native';

import { Layouts, Colors, Dimensions, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  background: {
    width: Dimensions.width.size100,
    height: Dimensions.height.size50,
    alignItems: 'center',
    paddingTop:
      Dimensions.height.size50 -
      Dimensions.width.size52 -
      Spacing.vertical.size40,
  },
  logoContainer: {
    width: Dimensions.width.size52,
    height: Dimensions.width.size52,
    borderRadius: (Dimensions.width.size35 + Dimensions.height.size15) / 2,
    borderWidth: 5,
    borderColor: Colors.red,
    ...Layouts.centered,
    backgroundColor: Colors.white,
  },
  logo: {
    width: Dimensions.width.size30,
    height: Dimensions.width.size30,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size40,
  },
  header: {
    alignItems: 'center',
    gap: moderateScale(15),
  },
  title: {
    textAlign: 'center',
  },
  description: {
    color: `${Colors.typography20}80`,
    textAlign: 'center',
  },
  body: {
    flexDirection: 'row',
    gap: moderateScale(30),
  },
  footer: {
    gap: moderateScale(15),
  },
  inputContainer: {
    borderRadius: moderateScale(15),
  },
  inputLeft: {
    paddingLeft: moderateScale(15),
  },
  skipBtn: {
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 20,
    marginHorizontal: 0,
    flex: 0.25,
  },
  skipBtnText: { color: Colors.red },
  submitBtn: {
    marginHorizontal: 0,
    flex: 0.7,
  },
  footerBtnContainer: { flexDirection: 'row', justifyContent: 'space-between' }
});

export default styles;
