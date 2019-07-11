import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';

import {
  onToggleCalendar,
} from '../actions/bookingForm';

const mapStateToProps = state => ({
  isCalendarToggled: state.bookingFormReducer.isCalendarToggled,
  eventTargetName: state.bookingFormReducer.eventTargetName,
});

const mapDispatchToProps = dispatch => ({
  onToggleCalendar: e => dispatch(onToggleCalendar(e.target.name)),
});

const BookingFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormContainer;
