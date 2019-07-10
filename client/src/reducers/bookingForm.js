const initialState = {
  isCalendarToggled: false,
};

const bookingFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CALENDAR':
      return { ...state, isCalendarToggled: !state.isCalendarToggled };
    default:
      return state;
  }
};

export default bookingFormReducer;
