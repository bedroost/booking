import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/components/App';
import BookingForm from '../src/components/BookingForm';
import BookingFormContainer from '../src/containers/bookingForm';
import GuestsContainer from '../src/containers/guests';
import CalendarContainer from '../src/containers/calendar';

describe('<App />', () => {
  it('renders <BookingFormContainer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookingFormContainer)).to.have.lengthOf(1);
  });
});

describe('<BookingForm />', () => {
  const wrapper = shallow(<BookingForm />);
  it('renders <GuestsContainer /> component', () => {
    expect(wrapper.find(GuestsContainer)).to.have.lengthOf(1);
  });
  it('renders <CalendarContainer /> component', () => {
    expect(wrapper.find(CalendarContainer)).to.have.lengthOf(1);
  });
});
