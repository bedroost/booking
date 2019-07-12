import React from 'react';
import moment from 'moment';
import styles from '../../styles/calendar.module.css';
import CalendarDay from './CalendarDay';

const Calendar = ({
  listingInfo,
  bookedDatesObj,
  addMonth,
  nextMonth,
  lastMonth,
  onCheckin,
  onCheckout,
  onHover,
  checkinDate,
  checkoutDate,
  hoveredDate,
  onClearDates,
  isCalendarToggled,
  onToggleCalendar,
}) => {
  const momentUpdatedMonth = moment().add(addMonth, 'M');
  const firstDayofTheWeek = momentUpdatedMonth.date(1).day();
  const calendarMonth = [[], [], [], [], []];
  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      calendarMonth[j].push(j * 7 + i - firstDayofTheWeek + 1);
    }
  }

  // console.log('firstDayofTheWeek', firstDayofTheWeek);
  // console.log('lastDay', lastDay);
  // console.log('calendarMonth', calendarMonth);
  // console.log(bookedDatesObj);

  let firstAvailableCalendarDate = moment();
  let lastAvailableCalendarDate = listingInfo.lastAvailableDate;
  let sortedBookedDatesArr = null;
  if (checkinDate) {
    // set first available calendar date to be checkindate
    firstAvailableCalendarDate = moment(checkinDate, 'YYYY-MM-DD');
    // set last available calendar date to be last possible check out date
    sortedBookedDatesArr = Object.keys(bookedDatesObj).sort((a, b) => moment(a, 'YYYY-MM-DD') - moment(b, 'YYYY-MM-DD'));
    // console.log(sortedBookedDatesArr);
    for (let i = 0; i < sortedBookedDatesArr.length; i += 1) {
      if (moment(sortedBookedDatesArr[i], 'YYYY-MM-DD') > moment(checkinDate, 'YYYY-MM-DD')) {
        lastAvailableCalendarDate = moment(sortedBookedDatesArr[i], 'YYYY-MM-DD');
        bookedDatesObj[moment(lastAvailableCalendarDate).format('YYYY-MM-DD')] = false;
        break;
      }
    }
  }

  return (
    <div className={isCalendarToggled ? 'CalendarModal Show' : 'CalendarModal Hide'}>
      <div className="Calendar">
        <div className="CalendarMonth">
          <button
            className="CalendarMonthBackward"
            type="button"
            onClick={lastMonth}
          >
            <svg viewBox="0 0 1000 1000">
              <path d="M 336 275 L 126 485 h 806 c 13 0 23 10 23 23 s -10 23 -23 23 H 126 l 210 210 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 L 55 524 c -11 -11 -11 -21 0 -32 l 249 -249 c 21 -22 53 10 32 32 Z" />
            </svg>
          </button>
          <button
            className="CalendarMonthForward"
            type="button"
            onClick={nextMonth}
          >
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
              {momentUpdatedMonth.format('MMMM YYYY')}
            </strong>
          </div>
        </div>
        <table>
          <tbody>
            {calendarMonth.map((calendarWeek, calendarRow) => (
              <tr className="CalenderWeek" key={calendarWeek}>
                {calendarWeek.map((calendarDay, calendarCol) => (
                  <CalendarDay
                    key={calendarDay}
                    onToggleCalendar={onToggleCalendar}
                    bookedDatesObj={bookedDatesObj}
                    calendarRow={calendarRow}
                    calendarCol={calendarCol}
                    calendarMonth={calendarMonth}
                    calendarDay={calendarDay}
                    onCheckin={onCheckin}
                    onCheckout={onCheckout}
                    onHover={onHover}
                    checkinDate={checkinDate}
                    checkoutDate={checkoutDate}
                    hoveredDate={hoveredDate}
                    listingInfo={listingInfo}
                    addMonth={addMonth}
                    momentUpdatedMonth={momentUpdatedMonth}
                    firstAvailableCalendarDate={firstAvailableCalendarDate}
                    lastAvailableCalendarDate={lastAvailableCalendarDate}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="CalendarFooter">
        <div className="UpdatedToday">Updated today</div>
        <div className="CalenderWeek ClearDates">
          <input type="button" onClick={() => onClearDates()} value="Clear dates" />
        </div>
      </div>
      <button className="KeyboardShortcuts">
        <span>?</span>
      </button>
    </div>
  );
};

export default Calendar;
