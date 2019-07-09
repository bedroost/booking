import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { nextMonth, lastMonth, getDay } from '../actions/calendar';

const mapStateToProps = state => ({
  addMonth: state.calendarReducer.addMonth,
  checkinDay: state.calendarReducer.checkinDay,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  lastMonth: () => dispatch(lastMonth()),
  getDay: e => dispatch(getDay(e)),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
