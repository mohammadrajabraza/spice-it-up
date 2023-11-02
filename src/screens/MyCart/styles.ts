import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    ...Layouts.over,
    paddingTop: Dimensions.height.size12,
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
    width: Dimensions.width.size41,
    height: Dimensions.height.size10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: moderateScale(20),
  },
  selectedTransferMethodItem: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  transferMethodImage: {
    width: Dimensions.width.size7,
    height: Dimensions.width.size7
  },
  cartItems: {
    alignItems: 'center',
    gap: moderateScale(15),
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
    color: Colors.white
  },
  cartTotalRowContent: {
    color: Colors.white
  },
  checkoutButton: {
    width: 'auto',
    marginHorizontal: Spacing.horizontal.size12,
    marginTop: Spacing.horizontal.size8
  },
  checkoutButtonText: {
    color: Colors.primary,
  }
});

export default styles;
