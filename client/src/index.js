import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import BookingFormContainer from './containers/bookingForm';
import store from './store';

const App = () => <BookingFormContainer />;

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
