import { StyleSheet } from 'react-native';

import { Colors, Spacing, Dimensions } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: Spacing.vertical.size8,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    height: Dimensions.height.size8,
  },
  flagContainer: {
    backgroundColor: Colors.white,
    paddingLeft: Spacing.horizontal.size8,
    marginVertical: 0,
    paddingRight: 0,
  },
  flag: {
    gap: 0,
    padding: 0,
    margin: 0,
    marginRight: 0,
    paddingRight: Spacing.horizontal.size8,
  },
  callingCode: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  input: {
    color: Colors.black,
  },
});

export default styles;
