import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';

import {
  onToggleCalendar,
  onToggleGuests,
} from '../actions/bookingForm';

const mapStateToProps = state => ({
  isCalendarToggled: state.bookingFormReducer.isCalendarToggled,
  isGuestsToggled: state.bookingFormReducer.isGuestsToggled,
  eventTargetName: state.bookingFormReducer.eventTargetName,
  checkinDate: state.calendarReducer.checkinDate,
  checkoutDate: state.calendarReducer.checkoutDate,
});

const mapDispatchToProps = dispatch => ({
  onToggleCalendar: e => dispatch(onToggleCalendar(e.target.name)),
  onToggleGuests: () => dispatch(onToggleGuests()),
});

const BookingFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormContainer;
