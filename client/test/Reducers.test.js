import bookingFormReducer from '../src/reducers/bookingForm';
import calendarReducer from '../src/reducers/calendar';

describe('bookingFormReducer', () => {
  const initialState = {
    isCalendarToggled: false,
    isGuestsToggled: false,
    isCleaningFeeToggled: false,
    isServiceFeeToggled: false,
    isTaxesToggled: false,
  };

  test('should return initial state', () => {
    // console.log(bookingFormReducer(undefined, {}));
    expect(bookingFormReducer(undefined, {})).toEqual(initialState);
  });

  test('should toggle calendar', () => {
    expect(bookingFormReducer(undefined, { type: 'TOGGLE_CALENDAR' })).toEqual({
      ...initialState,
      isCalendarToggled: true,
    });
  });

  test('should toggle guests', () => {
    expect(bookingFormReducer(undefined, { type: 'TOGGLE_GUESTS' })).toEqual({
      ...initialState,
      isGuestsToggled: true,
    });
  });

  test('should toggle cleaning fee', () => {
    expect(bookingFormReducer(undefined, { type: 'TOGGLE_INFO', payload: 'cleaningFee' })).toEqual({
      ...initialState,
      isCleaningFeeToggled: true,
    });
  });

  test('should toggle service fee', () => {
    expect(bookingFormReducer(undefined, { type: 'TOGGLE_INFO', payload: 'serviceFee' })).toEqual({
      ...initialState,
      isServiceFeeToggled: true,
    });
  });

  test('should toggle taxes', () => {
    expect(bookingFormReducer(undefined, { type: 'TOGGLE_INFO', payload: 'taxes' })).toEqual({
      ...initialState,
      isTaxesToggled: true,
    });
  });
});

describe('calendar reducer', () => {
  const initialState = {
    addMonth: 0,
    checkinDate: null,
    checkoutDate: null,
    hoveredDate: null,
  };

  test('should return initial state', () => {
    expect(calendarReducer(undefined, {})).toEqual(initialState);
  });

  test('should increase month', () => {
    expect(calendarReducer(undefined, { type: 'NEXT_MONTH' })).toEqual({
      ...initialState,
      addMonth: 1,
    });
  });

  test('should decrease month', () => {
    expect(calendarReducer(undefined, { type: 'LAST_MONTH' })).toEqual({
      ...initialState,
      addMonth: -1,
    });
  });

  test('should check in', () => {
    expect(calendarReducer(undefined, { type: 'CHECK_IN', payload: '2019-07-01' })).toEqual({
      ...initialState,
      checkinDate: '2019-07-01',
    });
  });

  test('should check out', () => {
    expect(calendarReducer(undefined, { type: 'CHECK_OUT', payload: '2019-07-02' })).toEqual({
      ...initialState,
      checkoutDate: '2019-07-02',
    });
  });

  test('should clear dates', () => {
    expect(calendarReducer(undefined, { type: 'CLEAR_DATES' })).toEqual({
      ...initialState,
    });
  });
});
