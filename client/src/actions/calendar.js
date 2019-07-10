const nextMonth = () => ({
  type: 'NEXT_MONTH',
});

const lastMonth = () => ({
  type: 'LAST_MONTH',
});

const onCheckin = (calendarDate, calendarRow, calendarCol, bookedCalendarMonth) => ({
  type: 'CHECK_IN',
  payload: [calendarDate, calendarRow, calendarCol, bookedCalendarMonth],
});

export {
  nextMonth,
  lastMonth,
  onCheckin,
};
