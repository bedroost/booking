const nextMonth = () => ({
  type: 'NEXT_MONTH',
});

const lastMonth = () => ({
  type: 'LAST_MONTH',
});

const getDay = (e, calendarRow, calendarCol, bookedCalendarMonth) => ({
  type: 'GET_DAY',
  payload: [e.target.value, calendarRow, calendarCol, bookedCalendarMonth],
});

export {
  nextMonth,
  lastMonth,
  getDay,
};
