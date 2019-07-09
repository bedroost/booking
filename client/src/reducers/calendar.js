const initialState = {
  addMonth: 0,
  checkinDay: null,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_MONTH':
      return { ...state, addMonth: state.addMonth + 1, checkinDay: null };
    case 'LAST_MONTH':
      return { ...state, addMonth: state.addMonth - 1, checkinDay: null };
    case 'GET_DAY':
      if (!state.day) {
        return { ...state, checkinDay: action.payload };
      }
      return state;
    default:
      return state;
  }
};

export default calendarReducer;
