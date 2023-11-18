import { StyleSheet, Platform } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Dimensions.height.size12,
    backgroundColor: Colors.white,
    width: Dimensions.width.size100,
    ...Platform.select({
      ios: {
        // borderTopStartRadius: moderateScale(40),
        // borderTopEndRadius: moderateScale(40),
        // borderStartStartRadius: moderateScale(40),
        // borderStartEndRadius: moderateScale(40),
      },
      default: {},
    }),
    
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.height.size12,
    width: Dimensions.width.size100,
    elevation: Platform.select({ ios: 4, android: 20 }),
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    backgroundColor: Colors.white,
    // borderColor: Colors.darkGrey,
    paddingHorizontal: Spacing.horizontal.size32,
    // borderWidth: 1,
    borderTopStartRadius: moderateScale(40),
    borderTopEndRadius: moderateScale(40),
    borderStartStartRadius: moderateScale(40),
    borderStartEndRadius: moderateScale(40),
    justifyContent: 'space-between',
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  selectedTabItem: {
    borderBottomColor: Colors.red,
    borderBottomWidth: 2,
    paddingBottom: Spacing.vertical.size8,
  },
});

export default styles;
