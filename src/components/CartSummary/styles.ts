import { StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  card: {
    // marginTop: Spacing.vertical.size28,
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: moderateScale(20),
    paddingVertical: Spacing.vertical.size20,
  },
  row: {
    paddingHorizontal: Spacing.horizontal.size28,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    color: Colors.white,
  },
  content: {
    color: Colors.white,
  },
  button: {
    width: 'auto',
    marginHorizontal: Spacing.horizontal.size12,
    marginTop: Spacing.horizontal.size8,
  },
  buttonText: {
    color: Colors.primary,
  },
});

export default styles;
