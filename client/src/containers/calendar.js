import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import { nextMonth, lastMonth, onCheckin, onHover } from '../actions/calendar';

const mapStateToProps = state => ({
  addMonth: state.calendarReducer.addMonth,
  checkinDate: state.calendarReducer.checkinDate,
  hoveredDate: state.calendarReducer.hoveredDate,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  lastMonth: () => dispatch(lastMonth()),
  onCheckin: calendarDate => dispatch(onCheckin(calendarDate)),
  onHover: calendarDate => dispatch(onHover(calendarDate)),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
