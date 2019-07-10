/* eslint-disable padded-blocks */
import React from 'react';
import moment from 'moment';
import styles from '../../styles/calendar.module.css';

const CalendarDay = ({
  calendarRow,
  calendarCol,
  calendarMonth,
  calendarDay,
  onCheckin,
  onHover,
  checkinDate,
  bookedDatesObj,
  momentAddedMonth,
  firstAvailableCalendarDate,
  lastAvailableCalendarDate,
}) => {

  // keep track of booked dates
  const bookedCalendarMonth = [...calendarMonth];

  // if calendar day does not exist, calendar day classname should be empty
  let calendarDayClassName = 'CalendarDay Empty';

  let calendarDate = null;

  // if calendar day exists
  if (calendarDay) {
    // format calendar date to moment obj
    calendarDate = moment(`${momentAddedMonth.year()}-${momentAddedMonth.month() + 1}-${calendarDay}`, 'YYYY-MM-DD');

    // check booked dates which are before today, after last available date, or in booked dates obj
    if (calendarDate.isAfter(lastAvailableCalendarDate)
      || calendarDate.isBefore(firstAvailableCalendarDate)
      || bookedDatesObj[calendarDate.format('YYYY-MM-DD')]) {

      calendarDayClassName = 'CalendarDay Booked';

      // mark booked dates with x
      bookedCalendarMonth[calendarRow][calendarCol] = 'x';

    // if calendar day matches checkin day
    } else if (calendarDate.format('YYYY-MM-DD') === checkinDate) {

      // make calendar day background green
      calendarDayClassName = 'CalendarDay Checkin';

    } else {
      calendarDayClassName = 'CalendarDay Available';
      if (checkinDate) {
        calendarDayClassName = 'CalendarDay AvailableForCheckout';
      }
    }
  }

  return (
    <td>
      <input
        className={calendarDayClassName}
        type="button"
        onMouseOver={e => onHover(e)}
        onClick={e => onCheckin(calendarDate.format('YYYY-MM-DD'), calendarRow, calendarCol, bookedCalendarMonth)}
        value={calendarDay}
      />
    </td>
  );
};

export default CalendarDay;
