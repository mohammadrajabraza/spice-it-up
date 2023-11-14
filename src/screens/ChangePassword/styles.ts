import { StyleSheet } from 'react-native';

import { Spacing } from 'styles';

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  inputContainer: {
    paddingHorizontal: Spacing.horizontal.size8,
  },
  textInput: {
    paddingHorizontal: Spacing.horizontal.size12,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 5,
  },
  icon: { paddingLeft: Spacing.horizontal.size4 },
});

export default styles;
