import { Platform, StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginVertical: Spacing.vertical.size8,
    width: '100%',
    ...Platform.select({
      ios: { paddingVertical: Spacing.vertical.size20  },
      android: { paddingVertical: Spacing.vertical.size4 * 1.2 },
    }),
  },
  textInputContainer: {
    flex: 1,
    paddingHorizontal: Spacing.horizontal.size16,
    flexDirection: 'column',
    gap: 2
  },
  textInput: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  label: {
    color: `${Colors.typography20}aa`,
    fontSize: moderateScale(11),
    paddingHorizontal: 1,
  }
});

export default styles;
