import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  wrapper: {
    ...Layouts.over,
    backgroundColor: 'transparent',
  },
  content: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: 'transparent',
    gap: Spacing.horizontal.size16,
  },
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width: Dimensions.width.size15,
    height: Dimensions.width.size15,
    ...Layouts.centered,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 4,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  logo: {
    // width: Dimensions.width.size9,
    // height: Dimensions.width.size9,
  },
  searchInputContainer: {
    elevation: 4,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size16,
    paddingRight: Spacing.horizontal.size16,
    // marginTop: Spacing.vertical.size12,
    height: Dimensions.height.size8,
  },
  banner: {
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    height: Dimensions.height.size23,
  },
  bannerContent: {
    paddingLeft:
      Dimensions.width.size50 -
      Spacing.horizontal.globalHorizontalPadding +
      Spacing.horizontal.size4,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: Spacing.vertical.size8,
  },
  bannerTitle: {
    color: Colors.white,
    lineHeight: moderateScale(24),
    fontSize: moderateScale(17),
  },
  bannerButton: {
    width: Dimensions.width.size25,
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: Dimensions.height.size5,
  },
  bannerButtonText: {
    color: Colors.red,
    fontSize: moderateScale(10),
    fontWeight: 'bold',
  },
  section: {
    gap: Spacing.horizontal.size16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.size4,
  },
  sectionList: {
    minWidth: Dimensions.width.size100,
    overflow: 'visible',
  },
});

export default styles;
