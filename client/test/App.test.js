/* eslint-disable no-unused-expressions */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';

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

xdescribe('<BookingForm />', () => {
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
  // console.log(wrapper.instance().props.isCalendarToggled);

  describe('Calendar', () => {
    test('renders <CalendarContainer /> component', () => {
      expect(wrapper.find(CalendarContainer)).toHaveLength(1);
    });

    test('should open calendar modal on button click in checkin field', () => {
      wrapper.find('#checkin').simulate('click');
      expect(wrapper.instance().props.isCalendarToggled).toBe(true);
    });

    test('should open calendar modal on button click in checkin field', () => {
      wrapper.find('#checkin').simulate('click');
      expect(wrapper.instance().props.isCalendarToggled).toBe(true);
    });

    test('should open calendar modal on button click in checkout field', () => {
      wrapper.find('#checkout').simulate('click');
      expect(wrapper.instance().props.isCalendarToggled).toBe(true);
    });

    test('should close calendar modal on button click in booking form', () => {
      wrapper.props({ isCalendarToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.instance().props.isCalendarToggled).toBe(false);
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
      expect(wrapper.instance().props.isGuestsToggled).toBe.true;
    });

    test('should close guests modal on button click in booking form', () => {
      wrapper.props({ isGuestsToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.instance().props.isGuestsToggled).toBe.false;
    });

    test('should show initial guests as 1 guest', () => {
      expect(wrapper.find('#guests').props().value).toBe('1 guest');
    });
  });

  test('should show price from listinginfo state', () => {
    expect(wrapper.find('.Price').text()).toBe('$10');
  });
});

xdescribe('<Calendar />', () => {
  const listingInfo = {
    basePrice: 10,
  };
  const wrapper = mount(
    <Calendar
      listingInfo={listingInfo}
      isCalendarToggled={false}
      addMonth={0}
      checkinDate={null}
      lastMonth={() => {
        wrapper.setProps({
          addMonth: wrapper.props().addMonth - 1,
        });
      }}
      nextMonth={() => {
        wrapper.setProps({
          addMonth: wrapper.props().addMonth + 1,
        });
      }}
      onClearDates={() => {
        wrapper.setProps({
          checkinDate: null,
        });
      }}
    />,
  );

  console.log(wrapper.props());

  test('renders 1 table', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });

  test('renders 5 rows', () => {
    expect(wrapper.find('tr')).toHaveLength(5);
  });

  test('header shows current calendar month', () => {
    expect(wrapper.find('.CalendarHeaderMonth').text()).toEqual(moment().format('MMMM YYYY'));
  });

  test('renders 35 <CalendarDay /> components', () => {
    expect(wrapper.find(CalendarDay)).toHaveLength(35);
  });

  test('calendar modal is hidden initially', () => {
    expect(wrapper.find('.Hide')).toHaveLength(1);
  });

  test('calendar modal shows when toggled', () => {
    wrapper.setProps({ isCalendarToggled: true });
    expect(wrapper.find('.Show')).toHaveLength(1);
  });

  test('calendar backward button decrements month', () => {
    wrapper.setProps({ addMonth: 0 });
    wrapper.find('.CalendarMonthBackward').simulate('click');
    expect(wrapper.props().addMonth).toBe(-1);
  });

  test('calendar forward button increments month', () => {
    wrapper.setProps({ addMonth: 0 });
    wrapper.find('.CalendarMonthForward').simulate('click');
    expect(wrapper.props().addMonth).toBe(1);
  });

  test('calendar clears dates', () => {
    expect(wrapper.props().checkinDate).toBe(null);
  });
});

describe('<CalendarDay />', () => {
  
});
