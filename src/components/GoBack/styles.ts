import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts } from 'styles';

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
      width: 10,
      height: 30,
    },
    ...Layouts.over,
    top: 8,
    left: 15,
    ...Layouts.centered,
  },
});

export default styles;
