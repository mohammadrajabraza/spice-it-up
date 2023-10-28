import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing, Layouts } from 'styles';
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
  iconContainer: {
    ...Layouts.centered,
    marginEnd: 8,
  },
  imageContainerStyle: {
    backgroundColor: Colors.white,
    borderRadius: 10000,
    ...Layouts.centered,
    padding: 10,
  },
  image: {
    width: Dimensions.width.size6,
    height: Dimensions.width.size6,
  },
});

export default styles;
