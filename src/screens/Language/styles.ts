import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    paddingVertical: Spacing.vertical.size12,
    paddingLeft: Spacing.horizontal.size4,
  },
  selectedName: {
    color: Colors.primary,
    fontWeight: '600',
  },
  tick: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    backgroundColor: `${Colors.primary}33`,
    ...Layouts.centered,
    borderRadius: moderateScale(8),
  },
});

export default styles;
