import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import {
  nextMonth,
  lastMonth,
  onCheckin,
  onCheckout,
  onHover,
  onClearDates,
} from '../actions/calendar';

const mapStateToProps = state => ({
  addMonth: state.calendarReducer.addMonth,
  checkinDate: state.calendarReducer.checkinDate,
  checkoutDate: state.calendarReducer.checkoutDate,
  hoveredDate: state.calendarReducer.hoveredDate,
  onClearDates: state.calendarReducer.onClearDates,
});

const mapDispatchToProps = dispatch => ({
  nextMonth: () => dispatch(nextMonth()),
  lastMonth: () => dispatch(lastMonth()),
  onCheckin: calendarDate => dispatch(onCheckin(calendarDate)),
  onCheckout: calendarDate => dispatch(onCheckout(calendarDate)),
  onHover: calendarDate => dispatch(onHover(calendarDate)),
  onClearDates: () => dispatch(onClearDates()),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
