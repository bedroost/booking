import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';

import {
  onToggleCalendar,
} from '../actions/bookingForm';

const mapStateToProps = state => ({
  isCalendarToggled: state.bookingFormReducer.isCalendarToggled,
});

const mapDispatchToProps = dispatch => ({
  onToggleCalendar: () => dispatch(onToggleCalendar()),
});

const BookingFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormContainer;
