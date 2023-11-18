import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts } from 'styles';

const onboardingImageHeight = Platform.select({
  ios: Dimensions.height.size52,
  android: Dimensions.height.size50,
  default: Dimensions.height.size50,
});

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimensions.height.size4,
    backgroundColor: Colors.white,
  },
  pagination: {
    position: 'absolute',
    top: onboardingImageHeight + 180
  },
  paginationItem: {
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
    marginHorizontal: 4,
    width: 12,
    height: 12,
  },
  paginationItemActive: {
    backgroundColor: Colors.primary,
  },
  paginationItemInactive: {
    backgroundColor: Colors.grey,
  },
  item: {
    alignItems: 'center',
    gap: 15,
  },
  image: {
    width: Dimensions.width.size95,
    height: onboardingImageHeight,
  },
  button: {
    width: Dimensions.width.size40,
  },
});

export default styles;
