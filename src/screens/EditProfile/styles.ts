import { StyleSheet } from 'react-native';

import { Spacing } from 'styles';

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  inputContainer: {
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size8,
  },
  textInput: { paddingLeft: Spacing.vertical.size12 },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 5,
  },
});

export default styles;
