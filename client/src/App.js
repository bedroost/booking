import React from 'react';
import axios from 'axios';
import GuestsContainer from './containers/guests';
import CalendarContainer from './containers/calendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedDates: [],
      listingInfo: { maxGuests: 2 },
    };
  }

  componentDidMount() {
    axios.get(`/api/${window.location.pathname.split('/')[2]}/booking`)
      .then(({ data }) => {
        console.log(data);
        const { bookedDates, listingInfo } = data;
        this.setState({
          bookedDates,
          listingInfo,
        });
      });
  }

  render() {
    const {
      countAdults,
      incrementAdults,
      decrementAdults,
      countChildren,
      incrementChildren,
      decrementChildren,
      incrementInfants,
      decrementInfants,
      addMonth,
      nextMonth,
      lastMonth,
      getDay,
    } = this.props;

    const { bookedDates, listingInfo } = this.state;

    return (
      <div className="App">
        <CalendarContainer
          addMonth={addMonth}
          nextMonth={nextMonth}
          lastMonth={lastMonth}
          getDay={getDay}
        />
        <GuestsContainer
          bookedDates={bookedDates}
          listingInfo={listingInfo}
          countAdults={countAdults}
          incrementAdults={incrementAdults}
          decrementAdults={decrementAdults}
          countChildren={countChildren}
          incrementChildren={incrementChildren}
          decrementChildren={decrementChildren}
          incrementInfants={incrementInfants}
          decrementInfants={decrementInfants}
        />
        <div className="BookingFormOutline">
          <div className="BookingFormInnerOutline">
            <div className="BookingFormHeader">
              <span className="Price">$49 </span>
              <span className="PriceDesc">per night</span>
              <div>
                <span>***** 144</span>
              </div>
            </div>
            <form>
              <div className="BookingForm">
                <div className="Dates">
                  <span>Dates</span>
                  <div className="Checking">
                    <input id="checkin" placeholder="Check-in"></input>
                    <span id="arrow"></span>
                    <input id="checkout" placeholder="Checkout"></input>
                  </div>
                </div>
                <span>Guests</span>
                <div className="Guests">
                  
                </div>
                <div className="Details">
                  <div>
                    <span>$49 x 2 nights</span>
                  </div>
                  <div>
                    <span>$49 x 2 nights</span>
                  </div>
                  <div>
                    <span>$49 x 2 nights</span>
                  </div>
                  <div>
                    <span>$49 x 2 nights</span>
                  </div>
                </div>
                <button className="BookingFormButton"><span>Start Booking</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
