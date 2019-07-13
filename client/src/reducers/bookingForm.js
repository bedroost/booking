const initialState = {
  isCalendarToggled: false,
  isGuestsToggled: false,
  isCleaningFeeToggled: false,
  isServiceFeeToggled: false,
  isTaxesToggled: false,
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
    case 'TOGGLE_INFO':
      console.log(action.payload);
      if (action.payload === 'cleaningFee') {
        return {
          ...state,
          isCleaningFeeToggled: !state.isCleaningFeeToggled,
        };
      }
      if (action.payload === 'serviceFee') {
        return {
          ...state,
          isServiceFeeToggled: !state.isServiceFeeToggled,
        };
      }
      if (action.payload === 'taxes') {
        return {
          ...state,
          isTaxesToggled: !state.isTaxesToggled,
        };
      }
      break;
    case 'TOGGLE_OFF':
      if (action.payload === 'bookingForm') {
        return initialState;
      }
      break;
    default:
      return state;
  }
};

export default bookingFormReducer;
