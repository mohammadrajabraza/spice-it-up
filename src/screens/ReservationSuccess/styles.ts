import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  background: {
    width: Dimensions.width.size100,
    height: Dimensions.height.size50,
    alignItems: 'center',
    paddingTop: Dimensions.height.size20,
  },
  successImage: {
    width: Dimensions.width.size50,
    height: Dimensions.width.size50,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size28,
  },
  content: {
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    color: Colors.green,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    flex: 1,
    gap: 15,
    justifyContent: 'flex-end',
  },
});

export default styles;
