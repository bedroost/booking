/* eslint-disable no-unused-expressions */
import React from 'react';
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
    expect(wrapper.find(BookingFormContainer)).toHaveLength(1);
  });
});

let wrapper;

beforeAll(() => {
  wrapper = shallow(
    <BookingForm
      onToggleCalendar={() => {
        wrapper.setProps({
          isCalendarToggled: !wrapper.props.isCalendarToggled,
        });
      }}
      onToggleGuests={() => {
        wrapper.setProps({
          isGuestsToggled: !wrapper.props.isGuestsToggled,
        });
      }}
      isCalendarToggled={false}
      isGuestsToggled={false}
    />,
  );
  wrapper.setState({
    listingInfo: {
      basePrice: 10,
    },
  });
});

describe('<BookingForm />', () => {
  describe('Calendar', () => {
    it('renders <CalendarContainer /> component', () => {
      expect(wrapper.find(CalendarContainer)).toHaveLength(1);
    });

    it('should open calendar modal on button click in checkin field', () => {
      wrapper.find('#checkin').simulate('click');
      expect(wrapper.props().isCalendarToggled).toBe.true;
    });

    it('should open calendar modal on button click in checkout field', () => {
      wrapper.find('#checkout').simulate('click');
      expect(wrapper.props().isCalendarToggled).toBe.true;
    });

    it('should close calendar modal on button click in booking form', () => {
      wrapper.props({ isCalendarToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.props().isCalendarToggled).toBe.false;
    });

    it('should show initial checkin date as check-in', () => {
      expect(wrapper.find('#checkin').props().value).toBe('Check-in');
    });

    it('should show initial checkout date as checkout', () => {
      expect(wrapper.find('#checkout').props().value).toBe('Checkout');
    });

    it('should show checkin date as clicked date', () => {
      console.log(wrapper.find(CalendarContainer).dive().debug());
    });
  });

  describe('Guests', () => {
    it('renders <GuestsContainer /> component', () => {
      expect(wrapper.find(GuestsContainer)).toHaveLength(1);
    });

    it('should open guests modal on button click in guests field', () => {
      wrapper.find('.Guests').simulate('click');
      expect(wrapper.props().isGuestsToggled).toBe.true;
    });

    it('should close guests modal on button click in booking form', () => {
      wrapper.props({ isGuestsToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.props().isGuestsToggled).toBe.false;
    });
  });

  it('should show price from listinginfo state', () => {
    expect(wrapper.find('.Price').text()).toBe('$10');
  });
});

xdescribe('<Calendar />', () => {

});
