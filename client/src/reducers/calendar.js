const initialState = {
  addMonth: 0,
  checkinDate: null,
  hoveredDate: null,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_MONTH':
      return { ...state, addMonth: state.addMonth + 1 };
    case 'LAST_MONTH':
      return { ...state, addMonth: state.addMonth - 1 };
    case 'CHECK_IN':
      if (!state.checkinDate) {
        return {
          ...state,
          checkinDate: action.payload,
        };
      }
      return state;
    case 'CHECK_OUT':
      return { ...state, checkoutDate: action.payload };
    case 'HOVER':
      return { ...state, hoveredDate: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
