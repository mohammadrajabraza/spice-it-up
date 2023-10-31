import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Dimensions.height.size12,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.horizontal.size32,
    alignItems: 'center',
    borderTopStartRadius: moderateScale(40),
    borderTopEndRadius: moderateScale(40),
    elevation: 5,
    width: Dimensions.width.size100,
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
