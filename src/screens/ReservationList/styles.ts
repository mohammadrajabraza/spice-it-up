import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width: Dimensions.width.size15,
    height: Dimensions.width.size15,
    ...Layouts.centered,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 4,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  list: {
    flex: 1,
    marginBottom: Dimensions.height.size8,
  },
  sectionHeader: {
    marginTop: Spacing.vertical.size16,
    textAlign: 'center',
    paddingBottom: Spacing.vertical.size12,
    fontWeight: '500',
  },
  card: {
    height: Dimensions.height.size15,
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
    elevation: 3,
    shadowColor: Colors.grey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size16,
    paddingVertical: Spacing.vertical.size20,
    marginBottom: Spacing.vertical.size16,
  },
  cardLeft: {
    justifyContent: 'space-between',
  },
  time: {
    color: Colors.red,
    fontWeight: 'bold',
  },
  personsContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  persons: {
    color: `${Colors.typography20}77`,
  },
  date: { fontWeight: '500' },
});

export default styles;
