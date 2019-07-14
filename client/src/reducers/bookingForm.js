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
        ...initialState,
        isCalendarToggled: !state.isCalendarToggled,
      };
    case 'TOGGLE_GUESTS':
      return {
        ...initialState,
        isGuestsToggled: !state.isGuestsToggled,
      };
    case 'TOGGLE_INFO':
      if (action.payload === 'cleaningFee') {
        return {
          ...initialState,
          isCleaningFeeToggled: !state.isCleaningFeeToggled,
        };
      }
      if (action.payload === 'serviceFee') {
        return {
          ...initialState,
          isServiceFeeToggled: !state.isServiceFeeToggled,
        };
      }
      if (action.payload === 'taxes') {
        return {
          ...initialState,
          isTaxesToggled: !state.isTaxesToggled,
        };
      }
      break;
    case 'TOGGLE_OFF':
      if (action.payload === 'serviceFee'
        || action.payload === 'taxes'
        || action.payload === 'cleaningFee'
        || action.payload === 'Checkin') {
        return { ...state };
      }
      return initialState;
    default:
      return state;
  }
};

export default bookingFormReducer;
