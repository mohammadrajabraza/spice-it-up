import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimensions.height.size4,
    backgroundColor: Colors.white,
  },
  pagination: {
    position: 'absolute',
    top: Dimensions.height.size80,
  },
  paginationItem: {
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
    marginHorizontal: 3,
  },
  paginationItemActive: {
    backgroundColor: Colors.primary,
  },
  paginationItemInactive: {
    backgroundColor: Colors.grey,
  },
  item: {
    alignItems: 'center',
    gap: 15,
  },
  image: {
    width: Dimensions.width.size100,
    height: Dimensions.height.size55,
  },
  button: {
    width: Dimensions.width.size40,
  },
});

export default styles;
