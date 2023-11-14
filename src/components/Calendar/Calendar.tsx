import { TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';

import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { CalendarComponent } from './calendar.types';

import Typography from 'components/Typography';

import ChevronRight from 'assets/svgs/chevron-right.svg';
import ChevronLeft from 'assets/svgs/chevron-left.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';

const Calendar: CalendarComponent = () => {
  const [monthIndex, setMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBack = () => {
    if (monthIndex === 0) return;
    setMonthIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (monthIndex === 11) return;
    setMonthIndex((prev) => prev + 1);
  };

  const calendar = useMemo(() => {
    const activeDate = new Date();
    activeDate.setMonth(monthIndex);
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekDays = {} as Record<string, Date[]>;
    eachDayOfInterval({ start: startDate, end: endDate }).forEach((date) => {
      const dayNumber = getDay(date);
      const day = days[dayNumber];
      if (!weekDays[day]) {
        weekDays[day] = [];
      }
      weekDays[day].push(date);
    });

    return { days: weekDays, month: format(activeDate, 'MMMM') };
  }, [monthIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="body2" style={styles.month}>
          {calendar.month}
        </Typography>
        <View style={{ gap: 5, flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleBack} style={styles.iconContainer}>
            <ChevronLeft width={moderateScale(10)} height={moderateScale(10)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={styles.iconContainer}>
            <ChevronRight
              width={moderateScale(10)}
              height={moderateScale(10)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calendar}>
        {Object.entries(calendar.days).map(([day, dates]) => (
          <View style={styles.calendarCol} key={day}>
            <Typography variant="heading3" style={styles.calenderDay}>
              {day}
            </Typography>
            {dates.map((date) => {
              const isSame = isSameDay(selectedDate, date);
              return (
                <TouchableOpacity
                  key={date.toString()}
                  onPress={() => setSelectedDate(date)}
                  style={{ position: 'relative' }}
                >
                  {isSame ? <View style={styles.selectedDay} /> : null}
                  <Typography
                    variant="caption"
                    style={isSame && styles.selectedDayText}
                  >
                    {format(date, 'dd')}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
