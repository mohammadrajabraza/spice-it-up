import { StyleSheet } from 'react-native';

import { Layouts, Colors, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.background100,
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  content: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    backgroundColor: 'transparent',
    gap: Spacing.horizontal.size16,
    paddingBottom : Spacing.vertical.size20,
  },
});

export default styles;
