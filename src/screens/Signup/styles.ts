import { StyleSheet } from 'react-native';
import { Colors, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.white,
  },
  content: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.size20,
    paddingBottom: Spacing.vertical.size56,
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
  inputContainer: {
    paddingHorizontal: Spacing.horizontal.size8,
  },
  textInput: {
    paddingHorizontal: Spacing.horizontal.size12,
  },
});

export default styles;
