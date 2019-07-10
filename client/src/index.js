import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import BookingForm from './components/BookingForm';
import store from './store';

const App = () => <BookingForm />;

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
