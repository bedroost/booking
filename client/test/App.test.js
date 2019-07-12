/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from '../src/components/App';
import BookingForm from '../src/components/BookingForm';
import BookingFormContainer from '../src/containers/bookingForm';
import GuestsContainer from '../src/containers/guests';
import CalendarContainer from '../src/containers/calendar';
import Calendar from '../src/components/Calendar';
import CalendarDay from '../src/components/CalendarDay';

describe('<App />', () => {
  test('renders <BookingFormContainer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BookingFormContainer)).toHaveLength(1);
  });
});

describe('<BookingForm />', () => {
  const wrapper = shallow(
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

  describe('Calendar', () => {
    test('renders <CalendarContainer /> component', () => {
      expect(wrapper.find(CalendarContainer)).toHaveLength(1);
    });

    test('should open calendar modal on button click in checkin field', () => {
      wrapper.find('#checkin').simulate('click');
      expect(wrapper.props().isCalendarToggled).toBe.true;
    });

    test('should open calendar modal on button click in checkout field', () => {
      wrapper.find('#checkout').simulate('click');
      expect(wrapper.props().isCalendarToggled).toBe.true;
    });

    test('should close calendar modal on button click in booking form', () => {
      wrapper.props({ isCalendarToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.props().isCalendarToggled).toBe.false;
    });

    test('should show initial checkin date as check-in', () => {
      expect(wrapper.find('#checkin').props().value).toBe('Check-in');
    });

    test('should show initial checkout date as checkout', () => {
      expect(wrapper.find('#checkout').props().value).toBe('Checkout');
    });
  });

  describe('Guests', () => {
    test('renders <GuestsContainer /> component', () => {
      expect(wrapper.find(GuestsContainer)).toHaveLength(1);
    });

    test('should open guests modal on button click in guests field', () => {
      wrapper.find('.Guests').simulate('click');
      expect(wrapper.props().isGuestsToggled).toBe.true;
    });

    test('should close guests modal on button click in booking form', () => {
      wrapper.props({ isGuestsToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.props().isGuestsToggled).toBe.false;
    });
  });

  test('should show price from listinginfo state', () => {
    expect(wrapper.find('.Price').text()).toBe('$10');
  });
});

describe('<Calendar />', () => {
  const listingInfo = {
    basePrice: 10,
  };
  const wrapper = shallow(
    <Calendar
      listingInfo={listingInfo}
    />
  );
  test('renders 35 <CalendarDay /> components', () => {
    expect(wrapper.find(CalendarDay)).toHaveLength(35);
  });
});
