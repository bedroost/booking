import React from 'react';

import BookingFormContainer from '../containers/bookingForm';
import ErrorBoundary from '../errors/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <BookingFormContainer />
  </ErrorBoundary>
);

export default App;
