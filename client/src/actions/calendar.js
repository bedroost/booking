const nextMonth = () => ({
  type: 'NEXT_MONTH',
});

const lastMonth = () => ({
  type: 'LAST_MONTH',
});

const onCheckin = calendarDate => ({
  type: 'CHECK_IN',
  payload: calendarDate,
});

const onHover = e => ({
  type: 'HOVER',
  // payload: e.target,
});

export {
  nextMonth,
  lastMonth,
  onCheckin,
  onHover,
};
