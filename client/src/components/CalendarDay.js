import React from 'react';
import moment from 'moment';
import styles from '../../styles/calendar.module.css';

const CalendarDay = (props) => {
  const { day, getDay, checkinDay, listingInfo, momentAddedMonth, bookedDates } = props;
  let calendarClass = 'CalendarDay Empty';
  if (day) {
    const formattedDay = `${momentAddedMonth.year()}-${momentAddedMonth.month()}-${day}`;
    // console.log(moment(formattedDay).format('YYYY-MM-DD'));
    if (moment(formattedDay).isAfter(moment(listingInfo.lastAvailableDate)) || bookedDates[moment(formattedDay).format('YYYY-MM-DD')]) {
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
