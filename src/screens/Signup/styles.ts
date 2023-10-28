import { StyleSheet } from 'react-native';
import { Colors, Layouts, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  authBackground: {
    width: Dimensions.width.size100,
    height: Dimensions.height.size34,
    alignItems: 'center',
    paddingTop: Spacing.vertical.size64,
  },
  authLogo: {
    width: Dimensions.width.size36,
    height: Dimensions.height.size19,
  },
  contentContainer: {
    ...Layouts.container,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.size20,
  },
  title: {
    textAlign: 'center',
    paddingBottom: Spacing.vertical.size16,
  },
  checkbox: {
    width: 15,
    height: 15,
    marginEnd: Spacing.horizontal.size12,
  },
});

export default styles;
