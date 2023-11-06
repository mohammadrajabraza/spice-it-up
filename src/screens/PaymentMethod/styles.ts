import { StyleSheet } from "react-native";
import { Spacing, Dimensions, Colors } from 'styles'
import { moderateScale } from "utils/styles";

const styles = StyleSheet.create({
  title: {
    paddingLeft: Spacing.horizontal.size8,
  },
  list: {
    paddingTop: Spacing.vertical.size12,
    backgroundColor: Colors.white,
  },
  card: {
    height: Dimensions.height.size14,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    gap: 10,
    paddingVertical: Dimensions.height.size4 / 2,
    elevation: 3,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size20,
    marginBottom: Spacing.vertical.size16,
    justifyContent: 'space-between',
  },
  notPrimaryCard: {
    backgroundColor: '#F6F6F6',
  },
  cardImage: {
    width: Dimensions.width.size25,
    height: Dimensions.height.size10
  },
  cardContent: {
    flexDirection: 'column',
    gap: 3,
    paddingTop: Spacing.vertical.size24,
  },
  primary: {
    color: Colors.red,
    textAlign: 'right'
  },
  notPrimary: {
    color: `${Colors.typography20}7a`,
    textAlign: 'right'
  }
})

export default styles;