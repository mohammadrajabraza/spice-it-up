import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing, Layouts, Shadows } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
  },
  wrapper: {
    flex: 1,
    ...Layouts.over,
    paddingTop: Spacing.horizontal.size20,
    // backgroundColor: 'transparent',
  },
  contentContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    gap: Spacing.horizontal.size16,
    paddingBottom: Spacing.vertical.size20,
  },
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  transferMethodRow: {
    // marginVertical: Spacing.vertical.size20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transferMethodItem: {
    width: Dimensions.width.size42,
    height: Dimensions.height.size8,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.primary,
    borderRadius: moderateScale(20),
  },
  selectedTransferMethodItem: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  transferMethodImage: {
    width: Dimensions.width.size6,
    height: Dimensions.width.size6,
  },
  cartItems: {
    alignItems: 'center',
    gap: moderateScale(15),
    width: Dimensions.width.size100,
    left: -Spacing.horizontal.globalHorizontalPadding,
  },
  cartTotalCard: {
    // marginTop: Spacing.vertical.size28,
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: moderateScale(20),
    paddingVertical: Spacing.vertical.size20,
  },
  cartTotalRow: {
    paddingHorizontal: Spacing.horizontal.size28,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartTotalRowHeading: {
    color: Colors.white,
  },
  cartTotalRowContent: {
    color: Colors.white,
  },
  checkoutButton: {
    width: 'auto',
    marginHorizontal: Spacing.horizontal.size12,
    marginTop: Spacing.horizontal.size8,
  },
  checkoutButtonText: {
    color: Colors.primary,
  },
});

export default styles;
