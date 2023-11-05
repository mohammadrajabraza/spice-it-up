import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: Colors.white,
    width: Dimensions.width.size12,
    height: Dimensions.width.size12,
    borderRadius: 8,
    shadowColor: Colors.grey,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    ...Layouts.over,
    left: Spacing.horizontal.size16,
    ...Layouts.centered,
    pointerEvents: 'box-only',
    zIndex: 1000,
  },
});

export default styles;
