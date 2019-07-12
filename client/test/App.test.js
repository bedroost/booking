/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

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

let isCalendarToggled;
let isGuestsToggled;
const onToggleCalendar = () => {
  isCalendarToggled = !isCalendarToggled;
};
const onToggleGuests = () => {
  isGuestsToggled = !isCalendarToggled;
};
const listingInfo = {
  basePrice: 10,
};

beforeEach(() => {
  isCalendarToggled = false;
  isGuestsToggled = false;
});

describe('<BookingForm />', () => {
  const wrapper = shallow(
    <BookingForm
      onToggleCalendar={onToggleCalendar}
      onToggleGuests={onToggleGuests}
      listingInfo={listingInfo}
    />,
  );

  it('renders <GuestsContainer /> component', () => {
    expect(wrapper.find(GuestsContainer)).to.have.lengthOf(1);
  });

  it('renders <CalendarContainer /> component', () => {
    expect(wrapper.find(CalendarContainer)).to.have.lengthOf(1);
  });

  it('should open calendar modal on button click in checkin field', () => {
    wrapper.find('#checkin').simulate('click');
    expect(isCalendarToggled).to.be.true;
  });

  it('should open calendar modal on button click in checkout field', () => {
    wrapper.find('#checkout').simulate('click');
    expect(isCalendarToggled).to.be.true;
  });

  it('should close calendar modal on button click in booking form', () => {
    isCalendarToggled = true;
    wrapper.find('.BookingForm').simulate('click');
    expect(isCalendarToggled).to.be.false;
  });

  it('should open guests modal on button click in guests field', () => {
    wrapper.find('.Guests').simulate('click');
    expect(isGuestsToggled).to.be.true;
  });

  it('should show price from listinginfo', () => {
    console.log(wrapper.find('.Price').get(0).value);
  });
});
