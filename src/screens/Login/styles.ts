import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

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
  registerHere: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Spacing.vertical.size20,
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
    elevation: 5,
    flexDirection: 'row',
    gap: 10,
    shadowColor: Colors.grey,
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 5 },
  },
});

export default styles;
