import React from 'react';
import axios from 'axios';
import GuestsContainer from './containers/guests';
import CalendarContainer from './containers/calendar';
import styles from '../styles/style.module.css';
import stars from '../images/stars.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedDatesObj: {},
      listingInfo: { maxGuests: 2 },
    };
  }

  componentDidMount() {
    axios.get(`/api/${window.location.pathname.split('/')[2]}/booking`)
      .then(({ data }) => {
        console.log(data);
        const { bookedDates, listingInfo } = data;
        const bookedDatesObj = {};
        bookedDates.forEach((el) => {
          bookedDatesObj[el.bookedDate] = true;
        });
        this.setState({
          bookedDatesObj,
          listingInfo,
        });
      });
  }

  render() {
    const { bookedDatesObj, listingInfo } = this.state;

    return (
      <div className="App">
        <GuestsContainer
          listingInfo={listingInfo}
        />
        <div className="BookingFormOutline">
          <div className="BookingFormInnerOutline">
            <div className="BookingFormHeader">
              <div className="BookingFormHeaderPrice">
                <span className="Price">$49 </span>
                <span className="PriceDesc">per night</span>
              </div>
              <div className="BookingFormHeaderStars">
                <span className="Stars" />
                <span>465</span>
              </div>
            </div>
            <form>
              <div className="BookingForm">
                <div className="Dates">
                  <span className="DatesText">Dates</span>
                  <div className="Checking">
                    <input id="checkin" placeholder="Check-in" disabled></input>
                      <svg id="arrow" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" ><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"></path></svg>
                    <input id="checkout" placeholder="Checkout" disabled></input>
                    <CalendarContainer
                      listingInfo={listingInfo}
                      bookedDates={bookedDates}
                      addMonth={addMonth}
                      nextMonth={nextMonth}
                      lastMonth={lastMonth}
                      getDay={getDay}
                      checkinDay={checkinDay}
                    />
                  </div>
                </div>
                <span className="GuestsText">Guests</span>
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
