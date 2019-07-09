const initialState = {
  addMonth: 0,
  day: null,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_MONTH':
      return { ...state, addMonth: state.addMonth + 1 };
    case 'LAST_MONTH':
      return { ...state, addMonth: state.addMonth - 1 };
    case 'GET_DAY':
      return { day: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
