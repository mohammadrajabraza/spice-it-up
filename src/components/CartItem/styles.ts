import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.height.size14,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    gap: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    elevation: 3,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
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
  cartQuantityContainer: {
    marginStart: 'auto',
    paddingTop: Spacing.vertical.size16,
  },
});

export default styles;
