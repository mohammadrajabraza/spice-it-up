import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.card,
    justifyContent: 'flex-start',
    paddingVertical: Spacing.vertical.size24,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  month: {
    fontWeight: '500',
  },
  iconContainer: {
    width: Dimensions.width.size9,
    height: Dimensions.width.size9,
    borderWidth: 2,
    borderColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  calendar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarCol: {
    alignItems: 'center',
    gap: 8,
  },
  calenderDay: {
    marginBottom: Spacing.vertical.size12,
    fontWeight: '500',
  },
  selectedDay: {
    ...Layouts.over,
    borderRadius: Dimensions.width.size8,
    backgroundColor: Colors.red,
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    transform: [
      { translateX: (-1 * Dimensions.width.size8) / 4 },
      { translateY: (-1 * Dimensions.width.size8) / 4 },
    ],
  },
  selectedDayText: {
    color: Colors.white,
  },
});

export default styles;
