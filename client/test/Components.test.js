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
import Guests from '../src/components/Guests';

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
        // console.log('toggle calendar', wrapper.instance().props.isCalendarToggled);
        wrapper.setProps({
          isCalendarToggled: !wrapper.instance().props.isCalendarToggled,
        });
      }}
      onToggleGuests={() => {
        // console.log('toggle guests');
        wrapper.setProps({
          isGuestsToggled: !wrapper.instance().props.isGuestsToggled,
        });
      }}
      onToggleOff={() => {
        wrapper.setProps({
          isGuestsToggled: false,
          isCalendarToggled: false,
        });
      }}
      isCalendarToggled={false}
      isGuestsToggled={false}
      countAdults={1}
      countChildren={0}
      countInfants={0}
    />,
  );

  // console.log(wrapper.instance().props.isCalendarToggled);
  beforeEach(() => {
    wrapper.setState({
      listingInfo: {
        basePrice: 10,
      },
    });
    wrapper.setProps({
      isCalendarToggled: false,
      isGuestsToggled: false,
      countAdults: 1,
      countChildren: 0,
      countInfants: 0,
    });
  });

  describe('Calendar', () => {
    test('renders <CalendarContainer /> component', () => {
      expect(wrapper.find(CalendarContainer)).toHaveLength(1);
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
      // wrapper.setProps({ isCalendarToggled: true });
      // console.log(wrapper.instance().props.isCalendarToggled, 'before');
      wrapper.find('.BookingForm').simulate('click');
      // console.log(wrapper.instance().props.isCalendarToggled, 'after');
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
      expect(wrapper.instance().props.isGuestsToggled).toBe(true);
    });

    test('should close guests modal on button click in booking form', () => {
      wrapper.setProps({ isGuestsToggled: true });
      wrapper.find('.BookingForm').simulate('click');
      expect(wrapper.instance().props.isGuestsToggled).toBe(false);
    });

    test('get guests method should return 1 guest', () => {
      expect(wrapper.instance().getGuestsText()).toBe('1 guest');
    });

    test('should show initial guests as 1 guest', () => {
      expect(wrapper.find('#guests').props().value).toBe('1 guest');
    });
  });

  test('should show price from listinginfo state', () => {
    expect(wrapper.find('.Price').text()).toBe('$10');
  });

  // console.log(wrapper.find('#guests').debug());
  // console.log(wrapper.find('.DetailsPrice').debug());
});

describe('<Calendar />', () => {
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

  // console.log(wrapper.props());

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

describe('<Guests />', () => {
  const wrapper = mount(
    <Guests
      listingInfo={{ maxGuests: 2 }}
      incrementAdults={() => {
        wrapper.setProps({ countAdults: wrapper.props().countAdults + 1 });
      }}
      decrementAdults={() => {
        if (wrapper.props().countAdults > 1) {
          wrapper.setProps({ countAdults: wrapper.props().countAdults - 1 });
        }
      }}
      incrementChildren={() => {
        wrapper.setProps({ countChildren: wrapper.props().countChildren + 1 });
      }}
      decrementChildren={() => {
        if (wrapper.props().countChildren > 0) {
          wrapper.setProps({ countChildren: wrapper.props().countChildren - 1 });
        }
      }}
      incrementInfants={() => {
        wrapper.setProps({ countInfants: wrapper.props().countInfants + 1 });
      }}
      decrementInfants={() => {
        if (wrapper.props().countInfants > 0) {
          wrapper.setProps({ countInfants: wrapper.props().countInfants - 1 });
        }
      }}
      countAdults={0}
      countChildren={0}
      countInfants={0}
    />,
  );

  test('should increase adults on click', () => {
    wrapper.find('.incrementAdults').simulate('click');
    expect(wrapper.props().countAdults).toBe(1);
  });
  test('should decrease adults on click', () => {
    wrapper.setProps({ countAdults: 2 });
    wrapper.find('.decrementAdults').simulate('click');
    expect(wrapper.props().countAdults).toBe(1);
  });

  test('should increase children on click', () => {
    wrapper.find('.incrementChildren').simulate('click');
    expect(wrapper.props().countChildren).toBe(1);
  });
  test('should decrease children on click', () => {
    wrapper.setProps({ countChildren: 2 });
    wrapper.find('.decrementChildren').simulate('click');
    expect(wrapper.props().countChildren).toBe(1);
  });

  test('should increase infants on click', () => {
    wrapper.find('.incrementInfants').simulate('click');
    expect(wrapper.props().countInfants).toBe(1);
  });
  test('should decrease infants on click', () => {
    wrapper.setProps({ countInfants: 2 });
    wrapper.find('.decrementInfants').simulate('click');
    expect(wrapper.props().countInfants).toBe(1);
  });
});
