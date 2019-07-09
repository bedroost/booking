import React from 'react';
import moment from 'moment';
import styles from '../../styles/calendar.module.css';

const CalendarDay = (props) => {
  const { day, getDay, checkinDay, listingInfo, momentAddedMonth, bookedDates } = props;
  let calendarClass = 'CalendarDay Empty';
  if (day) {
    const formattedDay = `${momentAddedMonth.year()}-${momentAddedMonth.month() + 1}-${day}`;
    // console.log(moment(formattedDay).format('YYYY-MM-DD'));
    // console.log(moment(momentAddedMonth), moment());
    if (moment(formattedDay, 'YYYY-M-D').isAfter(moment(listingInfo.lastAvailableDate))
      || moment(formattedDay, 'YYYY-M-D').isBefore(moment())
      || bookedDates[moment(formattedDay, 'YYYY-M-D').format('YYYY-MM-DD')]) {
      calendarClass = 'CalendarDay Booked';
    } else if (day === Number(checkinDay)) {
      calendarClass = 'CalendarDay Checkin';
    } else {
      calendarClass = 'CalendarDay Available';
    }
  }
  return (
    <td>
      <input
        className={calendarClass}
        type="button"
        onClick={getDay}
        value={day} />
    </td>
  );
};

export default CalendarDay;
