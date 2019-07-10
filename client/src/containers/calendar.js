import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { nextMonth, lastMonth, onCheckin } from '../actions/calendar';

const mapStateToProps = state => ({
  addMonth: state.calendarReducer.addMonth,
  checkinDate: state.calendarReducer.checkinDate,
  checkinDayRow: state.calendarReducer.checkinDayRow,
  checkinDayCol: state.calendarReducer.checkinDayRow,
  checkinCalendarMonth: state.calendarReducer.checkinCalendarMonth,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  lastMonth: () => dispatch(lastMonth()),
  onCheckin: (calendarDate, calendarRow, calendarCol, bookedCalendarMonth) => (
    dispatch(onCheckin(calendarDate, calendarRow, calendarCol, bookedCalendarMonth))
  ),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
