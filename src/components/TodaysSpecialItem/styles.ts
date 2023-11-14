import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  todaysSpecialContainer: {
    minWidth: Dimensions.width.size100,
  },
  item: {
    width: Dimensions.width.size40,
    height: Dimensions.height.size30,
    marginRight: Spacing.horizontal.size16,
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: `${Colors.darkGrey}33`,
    elevation: 2,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    alignItems: 'center',
  },
  content: {
    ...Layouts.centered,
    flex: 1,
    gap: 5,
  },
  imageContainer: {
    width: Dimensions.width.size40,
    height: Dimensions.height.size16,
    borderTopStartRadius: moderateScale(10),
    borderTopEndRadius: moderateScale(10),
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.width.size40,
    height: Dimensions.height.size16,
  },
  price: {
    color: Colors.red,
    fontWeight: 'bold',
  },
});

export default styles;
