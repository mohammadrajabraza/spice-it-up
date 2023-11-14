import { StyleSheet } from 'react-native';

import { Spacing, Dimensions, Colors } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  list: {
    paddingTop: Spacing.vertical.size12,
    backgroundColor: Colors.white,
  },
  card: {
    height: Dimensions.height.size15,
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    gap: 10,
    elevation: 3,
    shadowColor: Colors.grey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size16,
  },
  text: {
    color: Colors.darkGrey,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(18),
  },
  cardImage: {
    width: Dimensions.width.size10,
    height: Dimensions.width.size10,
  },
  cardContent: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    // paddingTop: Spacing.vertical.size24,
  },
  address: {
    width: Dimensions.width.size70,
  },
});

export default styles;
