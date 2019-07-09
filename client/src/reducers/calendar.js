const initialState = {
  addMonth: 0,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_MONTH':
      return { ...state, countAdults: state.addMonth + 1 };
    case 'LAST_MONTH':
      return { ...state, countAdults: state.addMonth - 1 };
    default:
      return state;
  }
};

export default calendarReducer;
