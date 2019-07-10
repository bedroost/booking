import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { nextMonth, lastMonth, onCheckin } from '../actions/calendar';

const mapStateToProps = state => ({
  addMonth: state.calendarReducer.addMonth,
  checkinDay: state.calendarReducer.checkinDay,
  checkinDayRow: state.calendarReducer.checkinDayRow,
  checkinDayCol: state.calendarReducer.checkinDayRow,
  checkinCalendarMonth: state.calendarReducer.checkinCalendarMonth,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  lastMonth: () => dispatch(lastMonth()),
  onCheckin: (e, calendarRow, calendarCol, bookedCalendarMonth) => (
    dispatch(onCheckin(e, calendarRow, calendarCol, bookedCalendarMonth))
  ),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
