import { StyleSheet } from 'react-native';
import { Dimensions, Spacing, Layouts, Colors } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.height.size5,
    width: '100%',
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    gap: moderateScale(15),
  },
  imageContainer: {
    width: Dimensions.width.size50,
    height: Dimensions.width.size50,
    borderRadius: Dimensions.width.size60,
  },
  cameraIcon: {
    ...Layouts.over,
    left: Dimensions.width.size38,
    top: Dimensions.width.size38,
    width: Dimensions.width.size14,
    height: Dimensions.width.size14,
    borderRadius: Dimensions.width.size14,
    backgroundColor: Colors.grey,
    ...Layouts.centered,
  },
  list: { 
    marginVertical: Spacing.vertical.size24,
    flex: 1, 
    alignItems: 'center', 
    width: '100%',
    gap: 5 
  },
  card: {
    ...Layouts.card,
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size24,
    justifyContent: 'flex-start',
    flex: 1,
    borderRadius: moderateScale(10),
    shadowColor: `${Colors.primary}55`,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    flexDirection: 'row',
    gap: moderateScale(15),
    alignItems: 'center'
  },
});

export default styles;
