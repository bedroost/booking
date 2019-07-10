import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import {
  nextMonth,
  lastMonth,
  onCheckin,
  onCheckout,
  onHover,
} from '../actions/calendar';

const mapStateToProps = state => ({
  addMonth: state.calendarReducer.addMonth,
  checkinDate: state.calendarReducer.checkinDate,
  checkoutDate: state.calendarReducer.checkoutDate,
  hoveredDate: state.calendarReducer.hoveredDate,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  lastMonth: () => dispatch(lastMonth()),
  onCheckin: calendarDate => dispatch(onCheckin(calendarDate)),
  onCheckout: calendarDate => dispatch(onCheckout(calendarDate)),
  onHover: calendarDate => dispatch(onHover(calendarDate)),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
