import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Shadows, Spacing, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...Shadows.primary,
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.height.size13,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size12,
  },
  imageContainer: {
    width: Dimensions.width.size18,
    height: Dimensions.width.size18,
    ...Layouts.centered,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.width.size18,
    height: Dimensions.width.size18,
  },
  content: {
    paddingHorizontal: Spacing.horizontal.size16,
    flex: 1,
  },
  name: {},
  description: {
    color: Colors.darkGrey,
  },
  price: {
    color: Colors.red,
    fontWeight: 'bold',
    paddingRight: Spacing.horizontal.size8,
    alignSelf: 'flex-start',
    paddingTop: Spacing.vertical.size32,
  },
});

export default styles;
