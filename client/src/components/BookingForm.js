/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import GuestsContainer from '../containers/guests';
import CalendarContainer from '../containers/calendar';
import styles from '../../styles/style.module.css';
import stars from '../../images/stars.png';

class BookingForm extends React.Component {
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
    const {
      onToggleCalendar,
      onToggleGuests,
      isCalendarToggled,
      isGuestsToggled,
      eventTargetName,
      checkinDate,
      checkoutDate,
    } = this.props;

    console.log('checkin', checkinDate);
    console.log('checkout', checkoutDate);

    return (
      <div className="Booking">
        <div
          className="BookingForm"
          role="button"
          onClick={(e) => {
            if (isCalendarToggled) {
              onToggleCalendar(e);
            }
            if (isGuestsToggled) {
              onToggleGuests();
            }
          }}
        >
          <div className="BookingFormOutline">
            <div className="BookingFormInnerOutline">
              <div className="BookingFormHeader">
                <div className="BookingFormHeaderPrice">
                  <span className="Price">${listingInfo.basePrice} </span>
                  <span className="PriceDesc">per night</span>
                </div>
                <div className="BookingFormHeaderStars">
                  <span className="Stars" />
                  <span>465</span>
                </div>
              </div>
              <form>
                <div className="BookingFormBody">
                  <div className="Dates">
                    <span className="DatesText">Dates</span>
                    <div className="Checking">
                      <input
                        type="button"
                        id="checkin"
                        value={checkinDate ? moment(checkinDate, 'YYYY-MM-DD').format('DD/MM/YYYY') : 'Check-in'}
                        name="Checkin"
                        onClick={e => onToggleCalendar(e)}
                      />
                      <svg id="arrow" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" ><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"></path></svg>
                      <input
                        type="button"
                        id="checkout"
                        value={checkoutDate ? moment(checkoutDate, 'YYYY-MM-DD').format('DD/MM/YYYY') : 'Checkout'}
                        name="Checkout"
                        onClick={e => onToggleCalendar(e)}
                      />
                    </div>
                  </div>
                  <span className="GuestsText">Guests</span>
                  <div
                    className="Guests"
                    role="button"
                    onClick={isGuestsToggled ? null : () => onToggleGuests()}
                  >
                    <input id="guests" value="1 guest" type="button"></input>
                    {isGuestsToggled
                      ? <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'currentcolor' }}><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd"></path></svg>
                      : <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'currentcolor' }}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></svg>
                    }
                  </div>
                  <div className="Details">
                    {/* <div>
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
                    </div> */}
                  </div>
                  <button className="BookingFormButton" type="button">
                    <span>Start Booking</span>
                  </button>
                  <div className="BookingFormMessage">You won't be charged yet</div>
                  <div className="BookingFormFooter">
                    <div className="BookingFormAttention">
                      This place is getting a lot of attention.
                    </div>
                    <div className="BookingFormViewed">
                      It’s been viewed 500+ times in the past week.
                    </div>
                    <div className="Lightbulb" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <CalendarContainer
          listingInfo={listingInfo}
          bookedDatesObj={bookedDatesObj}
          isCalendarToggled={isCalendarToggled}
          onToggleCalendar={onToggleCalendar}
        />
        <GuestsContainer
          listingInfo={listingInfo}
          isGuestsToggled={isGuestsToggled}
          onToggleGuests={onToggleGuests}
        />
      </div>
    );
  }
}

export default BookingForm;
