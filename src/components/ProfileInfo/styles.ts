import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  root: {
    ...Layouts.card,
    paddingVertical: Spacing.vertical.size28,
  },
  name: {
    color: Colors.typography20,
    fontFamily: 'Open Sans',
    fontWeight: '600',
  },
  email: {
    color: `${Colors.typography20}80`,
    fontFamily: 'Open Sans',
    fontWeight: '400',
  },
  address: {
    color: `${Colors.typography20}80`,
    fontFamily: 'Open Sans',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  edit: {
    color: Colors.red,
    fontFamily: 'Open Sans',
    fontWeight: '400',
  },
});

export default styles;
