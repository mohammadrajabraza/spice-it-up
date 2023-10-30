import { StyleSheet } from 'react-native';
import { Colors, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
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
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: Spacing.vertical.size4,
  },
  registerBtn: {
    width: '100%',
    marginTop: Spacing.vertical.size8,
  },
  redText: {
    color: Colors.red,
  },
  checkBoxTextContainer: {
    flexDirection: 'row',
  },
});

export default styles;
