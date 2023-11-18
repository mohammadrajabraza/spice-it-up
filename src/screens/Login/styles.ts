import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  keyboardAwareScrollView: {
    flex: 1,
  },
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
    paddingBottom: Spacing.vertical.size88,
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
  registerHere: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Spacing.vertical.size28,
  },
  authMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authMethodBtn: {
    borderWidth: 1,
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
    borderRadius: 15,
    width: Dimensions.width.size42,
    textAlign: 'center',
    ...Layouts.centered,
    paddingVertical: Spacing.vertical.size16,
    flexDirection: 'row',
    gap: 10,
    shadowColor: 'rgba(0,0,0,0.53)',
    elevation: Platform.select({ ios: 2, android: 20, default: 2 }),
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 25 },
    shadowRadius: 10,
  },
  inputContainer: {
    paddingHorizontal: Spacing.horizontal.size8,
  },
  textInput: {
    paddingHorizontal: Spacing.horizontal.size12,
  },
});

export default styles;
