const initialState = {
  isCalendarToggled: false,
  eventTargetName: null,
};

const bookingFormReducer = (state = initialState, action) => {
  // let calendarToggledState = state.isCalendarToggled;
  // if (action.payload === 'Checkin' || action.payload === 'Checkin') {
  //   calendarToggledState = !state.isCalendarToggled;
  // }

  switch (action.type) {
    case 'TOGGLE_CALENDAR':
      return {
        ...state,
        isCalendarToggled: !state.isCalendarToggled,
        eventTargetName: action.payload,
      };
    default:
      return state;
  }
};

export default bookingFormReducer;
