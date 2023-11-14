import { StyleSheet } from 'react-native';

import { Spacing, Layouts, Dimensions, Colors } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  spotRow: {
    flexDirection: 'row',
    gap: 10,
  },
  spot: {
    flex: 1,
    borderColor: Colors.darkGrey,
    height: Dimensions.height.size8,
    borderWidth: 1,
    borderRadius: moderateScale(20),
    backgroundColor: Colors.white,
  },
  selectedSpot: {
    flex: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  card: {
    ...Layouts.card,
    borderColor: Colors.darkGrey,
    borderWidth: 1,
    borderRadius: moderateScale(10),
    margin: 0,
    marginBottom: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.vertical.size16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
