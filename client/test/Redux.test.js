import bookingFormReducer from '../src/reducers/bookingForm';

xdescribe('Booking Form Reducer', () => {
  test('should return initial state', () => {
    console.log(bookingFormReducer(undefined, {}));
  });
});
