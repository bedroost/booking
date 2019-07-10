import { connect } from 'react-redux';

import {
  onToggleCalendar,
} from '../actions/bookingform';

const mapStateToProps = state => ({
  isCalendarToggled: state.calendarReducer.isCalendarToggled,
});

const mapDispatchToProps = dispatch => ({
  onToggleCalendar: () => dispatch(onToggleCalendar()),
})

const BookingFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormContainer;
