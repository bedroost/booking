/* eslint-disable padded-blocks */
import React from 'react';
import moment from 'moment';
import styles from '../../styles/calendar.module.css';

const CalendarDay = (props) => {
  const {
    calendarRow,
    calendarCol,
    calendarMonth,
    calendarDay,
    onCheckin,
    checkinDay,
    listingInfo,
    momentAddedMonth,
    bookedDates
  } = props;

  // keep track of booked dates
  const bookedCalendarMonth = [...calendarMonth];

  // if calendar day does not exist, calendar day classname should be empty
  let calendarDayClassName = 'CalendarDay Empty';

  // if calendar day exists
  if (calendarDay) {

    // check booked dates which are before today, after last available date, or in booked dates obj
    const formattedDay = `${momentAddedMonth.year()}-${momentAddedMonth.month() + 1}-${calendarDay}`;
    if (moment(formattedDay, 'YYYY-M-D').isAfter(moment(listingInfo.lastAvailableDate))
      || moment(formattedDay, 'YYYY-M-D').isBefore(moment())
      || bookedDates[moment(formattedDay, 'YYYY-M-D').format('YYYY-MM-DD')]) {

      calendarDayClassName = 'CalendarDay Booked';

      // mark booked dates with x
      bookedCalendarMonth[calendarRow][calendarCol] = 'x';

    // if calendar day matches checkin day
    } else if (calendarDay === Number(checkinDay)) {

      // make calendar day background green
      calendarDayClassName = 'CalendarDay Checkin';

    } else {
      calendarDayClassName = 'CalendarDay Available';
    }
  }

  return (
    <td>
      <input
        className={calendarDayClassName}
        type="button"
        onClick={e => onCheckin(e, calendarRow, calendarCol, bookedCalendarMonth)}
        value={calendarDay}
      />
    </td>
  );
};

export default CalendarDay;
