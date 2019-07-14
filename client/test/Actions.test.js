import * as bookingFormActions from '../src/actions/bookingForm';

describe('bookingFormActions', () => {
  const mockedEvent = { target: { name: 'mockedEvent' } };

  test('should create an action to toggle calendar', () => {
    const expectedAction = {
      type: 'TOGGLE_CALENDAR',
    };
    expect(bookingFormActions.onToggleCalendar()).toEqual(expectedAction);
  });

  test('should create an action to toggle guests', () => {
    const expectedAction = {
      type: 'TOGGLE_GUESTS',
    };
    expect(bookingFormActions.onToggleGuests()).toEqual(expectedAction);
  });

  test('should create an action to toggle info', () => {
    const expectedAction = {
      type: 'TOGGLE_INFO',
      payload: 'mockedEvent',
    };
    expect(bookingFormActions.onToggleInfo(mockedEvent)).toEqual(expectedAction);
  });

  test('should create an action to toggle off', () => {
    const expectedAction = {
      type: 'TOGGLE_OFF',
      payload: 'mockedEvent',
    };
    expect(bookingFormActions.onToggleOff(mockedEvent)).toEqual(expectedAction);
  });
});
