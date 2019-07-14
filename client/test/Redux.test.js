import bookingFormReducer from '../src/reducers/bookingForm';

const initialState = {
  isCalendarToggled: false,
  isGuestsToggled: false,
  isCleaningFeeToggled: false,
  isServiceFeeToggled: false,
  isTaxesToggled: false,
};

describe('booking form reducer', () => {
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
