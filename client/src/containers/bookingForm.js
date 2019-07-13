import { connect } from 'react-redux';
import BookingForm from '../components/BookingForm';

import {
  onToggleCalendar,
  onToggleGuests,
  onToggleInfo,
  onToggleOff
} from '../actions/bookingForm';

const mapStateToProps = state => ({
  isCalendarToggled: state.bookingFormReducer.isCalendarToggled,
  isGuestsToggled: state.bookingFormReducer.isGuestsToggled,
  checkinDate: state.calendarReducer.checkinDate,
  checkoutDate: state.calendarReducer.checkoutDate,
  countAdults: state.guestsReducer.countAdults,
  countChildren: state.guestsReducer.countChildren,
  countInfants: state.guestsReducer.countInfants,
  isCleaningFeeToggled: state.bookingFormReducer.isCleaningFeeToggled,
  isServiceFeeToggled: state.bookingFormReducer.isServiceFeeToggled,
  isTaxesToggled: state.bookingFormReducer.isTaxesToggled,
  onToggleOff: state.bookingFormReducer.onToggleOff,
});

const mapDispatchToProps = dispatch => ({
  onToggleCalendar: () => dispatch(onToggleCalendar()),
  onToggleGuests: () => dispatch(onToggleGuests()),
  onToggleInfo: e => dispatch(onToggleInfo(e)),
  onToggleOff: item => dispatch(onToggleOff(item)),
});

const BookingFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormContainer;
