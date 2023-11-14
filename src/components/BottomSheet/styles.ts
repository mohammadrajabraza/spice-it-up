import { StyleSheet } from 'react-native';

import { Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: Dimensions.screenHeight,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: Dimensions.screenHeight,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    gap: 10,
  },
  heading: {
    textAlign: 'center',
  },
  buttons: {
    gap: 5,
    width: '100%',
  },
});

export default styles;
