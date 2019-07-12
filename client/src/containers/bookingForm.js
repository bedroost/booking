import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';

import {
  onToggleCalendar,
  onToggleGuests,
} from '../actions/bookingForm';

const mapStateToProps = state => ({
  isCalendarToggled: state.bookingFormReducer.isCalendarToggled,
  isGuestsToggled: state.bookingFormReducer.isGuestsToggled,
  checkinDate: state.calendarReducer.checkinDate,
  checkoutDate: state.calendarReducer.checkoutDate,
  countAdults: state.guestsReducer.countAdults,
  countChildren: state.guestsReducer.countChildren,
  countInfants: state.guestsReducer.countInfants,
});

const mapDispatchToProps = dispatch => ({
  onToggleCalendar: () => dispatch(onToggleCalendar()),
  onToggleGuests: () => dispatch(onToggleGuests()),
});

const BookingFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormContainer;
