import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';
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
    height: Dimensions.height.size8,
  },
  textInputStyle: {
    flex: 1,
    paddingHorizontal: Spacing.horizontal.size16,
    fontSize: moderateScale(15),
    color: Colors.black,
  },
});

export default styles;
