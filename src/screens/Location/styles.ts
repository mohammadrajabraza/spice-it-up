import { StyleSheet } from 'react-native';

import { Spacing, Dimensions, Colors, Shadows } from 'styles';
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
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    // gap: 10,
    ...Shadows.primary,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size16,
    paddingVertical: Spacing.vertical.size16,
    marginBottom: Spacing.vertical.size16,
  },
  text: {
    color: Colors.darkGrey,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(18),
    marginBottom: Spacing.vertical.size8
  },
  cardImage: {
    width: Dimensions.width.size10,
    height: Dimensions.width.size10,
    alignSelf: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'flex-start',
    // paddingTop: Spacing.vertical.size24,
  },
  address: {
    width: Dimensions.width.size70,
  },
  primary: {
    paddingLeft:
      Dimensions.width.size10 + 15,
    color: Colors.red,
    marginTop: Spacing.vertical.size4
  }
});

export default styles;
