const initialState = {
  addMonth: 0,
  checkinDate: null,
  checkinDayRow: null,
  checkinDayCol: null,
  checkinCalendarMonth: [],
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
          checkinDate: action.payload[0],
          checkinDayRow: action.payload[1],
          checkinDayCol: action.payload[2],
          checkinCalendarMonth: action.payload[3],
        };
      }
      return state;
    default:
      return state;
  }
};

export default calendarReducer;
