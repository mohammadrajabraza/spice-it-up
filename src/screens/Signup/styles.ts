import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    ...Layouts.container,
    backgroundColor: Colors.white,
    paddingBottom: Spacing.vertical.size56,
  },
  content: {
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
  inputContainer: {
    paddingHorizontal: Spacing.horizontal.size8,
  },
  textInput: {
    paddingHorizontal: Spacing.horizontal.size12,
  },
});

export const phoneInputStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: Spacing.vertical.size8,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    height: Dimensions.height.size8,
  },
  flagContainer: {
    backgroundColor: Colors.white,
    paddingLeft: Spacing.horizontal.size8,
    marginVertical: 0,
    paddingRight: 0,
  },
  flag: {
    gap: 0,
    padding: 0,
    margin: 0,
    marginRight: 0,
    paddingRight: Spacing.horizontal.size8,
  },
  callingCode: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  input: {
    color: Colors.black,
  },
});

export default styles;
