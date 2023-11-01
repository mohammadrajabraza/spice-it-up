import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Dimensions.height.size12,
    backgroundColor: Colors.white,
    width: Dimensions.width.size100,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.height.size12,
    width: Dimensions.width.size100,
    elevation: 5,
    shadowColor: Colors.darkGrey,
    shadowRadius: 20,
    shadowOffset: { width : 3, height: 5 },
    shadowOpacity: 0.6,
    backgroundColor: Colors.white,
    // borderColor: Colors.darkGrey,
    paddingHorizontal: Spacing.horizontal.size32,
    // borderWidth: 1,
    justifyContent: 'space-between',
    borderTopStartRadius: moderateScale(40),
    borderTopEndRadius: moderateScale(40),
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  selectedTabItem: {
    borderBottomColor: Colors.red,
    borderBottomWidth: 2,
    paddingBottom: Spacing.vertical.size8,
  }
});

export default styles;
