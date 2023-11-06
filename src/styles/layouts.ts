import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { moderateScale } from 'utils/styles';
import Spacing from './spacing';

const Layouts = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  over: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  card: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    elevation: 3,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: moderateScale(20),
    paddingHorizontal: Spacing.horizontal.size12,
  }
});

export default Layouts;
