/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import moment from 'moment';
import styles from '../../styles/calendar.module.css';

const Calendar = (props) => {
  const {
    bookedDates,
    addMonth,
    nextMonth,
    lastMonth,
    getDay,
  } = props;

  const firstDayofTheWeek = moment().add(addMonth, 'M').date(1).day();
  const lastDay = moment().add(addMonth, 'M').daysInMonth();
  const month = [[], [], [], [], []];
  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (i < firstDayofTheWeek && j === 0) {
        month[j].push(null);
      } else if (j * 7 + i > lastDay) {
        month[j].push(null);
      } else {
        month[j].push(j * 7 + i - firstDayofTheWeek + 1);
      }
    }
  }

  return (
    <div className="CalendarModal">
      <div className="Calendar">
        <div className="CalendarMonth">
          <button
            className="CalendarMonthBackward"
            type="button"
            onClick={lastMonth}>
            <svg viewBox="0 0 1000 1000">
              <path d="M 336 275 L 126 485 h 806 c 13 0 23 10 23 23 s -10 23 -23 23 H 126 l 210 210 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 L 55 524 c -11 -11 -11 -21 0 -32 l 249 -249 c 21 -22 53 10 32 32 Z" />
            </svg>
          </button>
          <button
            className="CalendarMonthForward"
            type="button"
            onClick={nextMonth}>
            <svg viewBox="0 0 1000 1000">
              <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z" />
            </svg>
          </button>
          <div className="CalendarHeaderDays">
            <div className="CalendarHeaderDay">Su</div>
            <div className="CalendarHeaderDay">Mo</div>
            <div className="CalendarHeaderDay">Tu</div>
            <div className="CalendarHeaderDay">We</div>
            <div className="CalendarHeaderDay">Th</div>
            <div className="CalendarHeaderDay">Fr</div>
            <div className="CalendarHeaderDay">Sa</div>
          </div>
        </div>
        <div className="CalendarHeader">
          <div className="CalendarHeaderMonth">
            <strong>
              {moment().add(addMonth, 'M').format('MMMM YYYY')}
            </strong>
          </div>
        </div>
        <table>
          <tbody>
            {month.map(week => (
              <tr className="CalenderWeek">
                {week.map((day) => {
                  let calendarClass = 'CalendarDay Empty';
                  if (day) {
                    const formattedDay = `${moment().year()}-${moment().month()}-${day}`;
                    // console.log(moment(formattedDay).format('YYYY-MM-DD'));
                    calendarClass = bookedDates[moment(formattedDay).format('YYYY-MM-DD')] ? 'CalendarDay Booked' : 'CalendarDay';
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
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="CalendarFooter">
        <div className="UpdatedToday">Updated today</div>
        <div className="CalenderWeek ClearDates">
          <span>Clear dates</span>
        </div>
      </div>
      <button className="KeyboardShortcuts">
        <span>?</span>
      </button>
    </div>
  );
};

export default Calendar;
