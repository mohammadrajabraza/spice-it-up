import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';
const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    ...Layouts.over,
    paddingTop: Dimensions.height.size12,
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    gap: Spacing.horizontal.size16,
    paddingBottom: Spacing.vertical.size20,
  },
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  card: {
    height: Dimensions.height.size15,
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    gap: 10,
    elevation: 3,
    shadowColor: Colors.grey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: Colors.darkGrey,
  },
  cardContent: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  cardLocationImage: {
    width: Dimensions.width.size10,
    height: Dimensions.width.size10,
  },

  cardPaymentImage: {
    width: Dimensions.width.size26,
    // height: Dimensions.height.size10
  },
  editText: {
    color: Colors.red,
  },
  contentText: {
    width: Dimensions.width.size70,
    textAlign: 'left'
  }
});

export default styles;
