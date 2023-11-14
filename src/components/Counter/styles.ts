import { StyleSheet } from 'react-native';

import { Dimensions, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  changeCountBtn: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    ...Layouts.centered,
    borderRadius: moderateScale(5),
  },
  changeCountBtnText: {
    fontSize: moderateScale(16),
    verticalAlign: 'middle',
    lineHeight: moderateScale(18),
    fontWeight: 'bold',
  },
});

export default styles;
