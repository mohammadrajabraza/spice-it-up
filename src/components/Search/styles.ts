import { StyleSheet } from "react-native";
import { Colors, Dimensions, Spacing } from "styles";

const styles = StyleSheet.create({
  searchInputContainer: {
    elevation: 4,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size16,
    paddingRight: Spacing.horizontal.size16,
    // marginTop: Spacing.vertical.size12,
    height: Dimensions.height.size8,
  },
});

export default styles;