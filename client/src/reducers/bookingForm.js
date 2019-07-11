const initialState = {
  isCalendarToggled: false,
  isGuestsToggled: false,
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
    case 'TOGGLE_GUESTS':
      return {
        ...state,
        isGuestsToggled: !state.isGuestsToggled,
      };
    default:
      return state;
  }
};

export default bookingFormReducer;
