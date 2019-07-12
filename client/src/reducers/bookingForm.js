const initialState = {
  isCalendarToggled: false,
  isGuestsToggled: false,
};

const bookingFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CALENDAR':
      return {
        ...state,
        isCalendarToggled: !state.isCalendarToggled,
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
