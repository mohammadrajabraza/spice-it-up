import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Dimensions.screenHeight,
    backgroundColor: Colors.background100,
  },
  imageBackground: {
    width: Dimensions.width.size100,
    height: Dimensions.height.size50,
  },
  wrapper: {
    minHeight: Dimensions.height.size55,
    bottom: Dimensions.height.size12,
    borderTopStartRadius: moderateScale(25),
    borderTopEndRadius: moderateScale(25),
    borderStartStartRadius: moderateScale(25),
    borderStartEndRadius: moderateScale(25),
    overflow: 'hidden',
  },
  scrollView: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.background100,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Platform.select({
      ios: Spacing.vertical.size88,
      android: Spacing.vertical.size12,
      default: Spacing.vertical.size12,
    }),
    zIndex: 100,
  },
  header: {
    flexDirection: 'row',
    marginTop: Dimensions.height.size5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    paddingVertical: Spacing.vertical.size20,
    paddingStart: Spacing.vertical.size4,
    gap: 20,
  },
  titleAndPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popular: {
    paddingHorizontal: Spacing.horizontal.size20,
    paddingVertical: Spacing.vertical.size12,
    backgroundColor: `${Colors.primary}11`,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
  },
  popularText: { color: Colors.primary },
  line: {
    width: Dimensions.width.size20,
    height: 5,
    marginVertical: 'auto',
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    borderRadius: moderateScale(10),
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ratingText: { color: Colors.darkGrey },
  star: {
    width: Dimensions.width.size5,
    height: Dimensions.width.size5,
  },
  name: {},
  price: {
    color: Colors.primary,
  },
  addons: {
    flexDirection: 'column',
    gap: 10,
  },

  addonItem: {
    width: '100%',
    borderRadius: moderateScale(15),
    backgroundColor: `${Colors.primary}11`,
    paddingHorizontal: Spacing.horizontal.size24,
    paddingVertical: Spacing.vertical.size32,
    gap: moderateScale(20),
  },
  addonRequired: { color: Colors.primary },
  addonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addonOptions: { gap: 10 },
  addonOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    width: '100%',
    backgroundColor: Colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingVertical: Spacing.vertical.size24,
    paddingBottom: Platform.select({ ios: 30, android: 25 }),
  },
  footerButton: {
    width: Dimensions.width.size55,
    // height: Dimensions.height.size2
  },
  changeItemCount: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  changeCountBtn: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    ...Layouts.centered,
    borderRadius: moderateScale(5),
  },
  changeCountBtnText: {
    fontSize: moderateScale(16),
    verticalAlign: 'middle',
    lineHeight: moderateScale(18),
    fontWeight: 'bold',
  },
});

export default styles;
