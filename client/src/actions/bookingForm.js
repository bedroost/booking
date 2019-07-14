const onToggleCalendar = () => ({
  type: 'TOGGLE_CALENDAR',
});

const onToggleGuests = () => ({
  type: 'TOGGLE_GUESTS',
});

const onToggleInfo = e => ({
  type: 'TOGGLE_INFO',
  payload: e.target.name,
});

const onToggleOff = e => ({
  type: 'TOGGLE_OFF',
  payload: e.target.name,
});

export {
  onToggleCalendar,
  onToggleGuests,
  onToggleInfo,
  onToggleOff,
};
