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

  let firstAvailableCalendarDate = moment();
  let lastAvailableCalendarDate = listingInfo.lastAvailableDate;
  const changedBookedDates = { ...bookedDatesObj };

  if (checkinDate) {
    // set first available calendar date to be checkindate
    firstAvailableCalendarDate = moment(checkinDate, 'YYYY-MM-DD');

    // set last available calendar date to be last possible check out date
    const sortedBookedDatesArr = Object.keys(changedBookedDates).sort((a, b) => moment(a, 'YYYY-MM-DD') - moment(b, 'YYYY-MM-DD'));

    let bookedDateFound = false;

    // find next booked date and make it available
    for (let i = 0; i < sortedBookedDatesArr.length; i += 1) {
      if (moment(sortedBookedDatesArr[i], 'YYYY-MM-DD') > moment(checkinDate, 'YYYY-MM-DD')) {
        lastAvailableCalendarDate = moment(sortedBookedDatesArr[i], 'YYYY-MM-DD');
        changedBookedDates[moment(lastAvailableCalendarDate).format('YYYY-MM-DD')] = false;
        bookedDateFound = true;
        break;
      }
    }

    // if no booked date was found, add one day to last available date
    if (!bookedDateFound) {
      lastAvailableCalendarDate = moment(checkinDate, 'YYYY-MM-DD').add(1, 'day');
    }
  }

  return (
    <div className={isCalendarToggled ? [styles.CalendarModal, styles.Show].join(' ') : [styles.CalendarModal, styles.Hide].join(' ')}>
      <div className={styles.Calendar}>
        <div className={styles.CalendarMonth}>
          <button
            className={styles.CalendarMonthBackward}
            type="button"
            onClick={lastMonth}
          >
            <svg viewBox="0 0 1000 1000">
              <path d="M 336 275 L 126 485 h 806 c 13 0 23 10 23 23 s -10 23 -23 23 H 126 l 210 210 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 L 55 524 c -11 -11 -11 -21 0 -32 l 249 -249 c 21 -22 53 10 32 32 Z" />
            </svg>
          </button>
          <button
            className={styles.CalendarMonthForward}
            type="button"
            onClick={nextMonth}
          >
            <svg viewBox="0 0 1000 1000">
              <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z" />
            </svg>
          </button>
          <div className={styles.CalendarHeaderDays}>
            <div className={styles.CalendarHeaderDay}>Su</div>
            <div className={styles.CalendarHeaderDay}>Mo</div>
            <div className={styles.CalendarHeaderDay}>Tu</div>
            <div className={styles.CalendarHeaderDay}>We</div>
            <div className={styles.CalendarHeaderDay}>Th</div>
            <div className={styles.CalendarHeaderDay}>Fr</div>
            <div className={styles.CalendarHeaderDay}>Sa</div>
          </div>
        </div>
        <div className={styles.CalendarHeader}>
          <div className={styles.CalendarHeaderMonth}>
            <strong>
              {momentUpdatedMonth.format('MMMM YYYY')}
            </strong>
          </div>
        </div>
        <table>
          <tbody>
            {calendarMonth.map(calendarWeek => (
              <tr className={styles.CalenderWeek} key={calendarWeek}>
                {calendarWeek.map(calendarDay => (
                  <CalendarDay
                    key={calendarDay}
                    calendarDay={calendarDay}
                    onCheckin={onCheckin}
                    onCheckout={onCheckout}
                    onHover={onHover}
                    checkinDate={checkinDate}
                    checkoutDate={checkoutDate}
                    hoveredDate={hoveredDate}
                    changedBookedDates={changedBookedDates}
                    momentUpdatedMonth={momentUpdatedMonth}
                    firstAvailableCalendarDate={firstAvailableCalendarDate}
                    lastAvailableCalendarDate={lastAvailableCalendarDate}
                    onToggleCalendar={onToggleCalendar}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.CalendarFooter}>
        <div className={styles.UpdatedToday}>Updated today</div>
        <div className={`${styles.CalenderWeek} ${styles.ClearDates}`}>
          <input type="button" onClick={() => onClearDates()} value="Clear dates" />
        </div>
      </div>
      <button type="button" className={styles.KeyboardShortcuts}>
        <span>?</span>
      </button>
    </div>
  );
};

export default Calendar;
