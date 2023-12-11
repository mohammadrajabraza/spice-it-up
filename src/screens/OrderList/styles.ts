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
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    gap: Spacing.horizontal.size16,
    paddingBottom: Spacing.vertical.size20,
  },
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  orderList: {
    // gap: Spacing.vertical.size12,
  },
  noOrderContainer: {
    ...Layouts.centered,
    gap: 15,
    flex: 0.9,
  },
  noOrderImageContainer: {
    width: Dimensions.width.size25,
    height: Dimensions.width.size25,
    borderRadius: Dimensions.width.size25,
    ...Layouts.centered,
    backgroundColor: `${Colors.red}10`,
  },
  noOrderTitle: {
    color: Colors.red,
    fontSize: moderateScale(30),
    textAlign: 'center',
  },
  noOrderDescription: {
    textAlign: 'center',
    width: Dimensions.width.size70,
  },
  noOrderButton: {
    marginTop: Spacing.vertical.size20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyRadio: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});

export default styles;
