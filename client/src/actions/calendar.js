const nextMonth = () => ({
  type: 'NEXT_MONTH',
});

const lastMonth = () => ({
  type: 'LAST_MONTH',
});

const getDay = e => ({
  type: 'GET_DAY',
  payload: e.target.value,
});

export {
  nextMonth,
  lastMonth,
  getDay,
};
