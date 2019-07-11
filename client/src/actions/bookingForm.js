const onToggleCalendar = item => ({
  type: 'TOGGLE_CALENDAR',
  payload: item,
});

const onToggleGuests = () => ({
  type: 'TOGGLE_GUESTS',
});

export {
  onToggleCalendar,
  onToggleGuests,
};
