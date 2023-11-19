import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing, Shadows } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  swiper: {
    marginHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    backgroundColor: Colors.yellow,
    borderRadius: moderateScale(20),
    overflow: 'visible',
  },
  swiperChildren: {
    borderRadius: moderateScale(20),
    ...Shadows.primary
  },
  rightAction: {
    width: Dimensions.width.size25,
    left: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: Colors.yellow,
    paddingLeft: Spacing.vertical.size36,
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: Dimensions.height.size14,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    gap: 10,
    alignItems: 'center',
    
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size12,
  },
  imageContainer: {
    width: Dimensions.width.size18,
    height: Dimensions.height.size10,
    ...Layouts.centered,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.width.size18,
    height: Dimensions.height.size10,
  },
  content: {
    flexDirection: 'column',
    paddingLeft: Spacing.horizontal.size8,
  },
  name: {
    lineHeight: moderateScale(22),
  },
  price: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  description: { color: Colors.darkGrey },
  counter: {
    marginStart: 'auto',
    paddingTop: Spacing.vertical.size16,
  },
});

export default styles;
