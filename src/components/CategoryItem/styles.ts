import { StyleSheet } from 'react-native';

import { Spacing, Dimensions, Colors } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.width.size28,
    height: Dimensions.height.size20,
    marginRight: Spacing.horizontal.size8,
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
  imageContainer: {
    width: Dimensions.width.size28,
    height: Dimensions.height.size14,
    borderTopStartRadius: moderateScale(10),
    borderTopEndRadius: moderateScale(10),
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.width.size28,
    height: Dimensions.height.size14,
  },
});

export default styles;
