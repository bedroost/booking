import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src';
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
  it('renders <GuestsContainer /> and <CalendarContainer /> components', () => {
    const wrapper = shallow(<BookingForm />);
    expect(wrapper.find(GuestsContainer).to.have.lengthOf(1));
    expect(wrapper.find(CalendarContainer).to.have.lengthOf(1));
  });
});
