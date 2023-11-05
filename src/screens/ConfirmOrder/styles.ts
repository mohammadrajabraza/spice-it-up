import { StyleSheet } from "react-native";
import { Colors, Dimensions, Layouts, Spacing } from 'styles'
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
    ...Layouts.card,
    height: Dimensions.height.size15,
    flexDirection: 'column',
    paddingVertical: Spacing.vertical.size20,
    paddingHorizontal: Spacing.horizontal.size20
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    color: Colors.darkGrey
  },
  content: {

  }
})

export default styles;