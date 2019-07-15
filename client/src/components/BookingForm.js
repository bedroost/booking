/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import GuestsContainer from '../containers/guests';
import CalendarContainer from '../containers/calendar';
import styles from '../../styles/booking.module.css';
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
    axios.get(`http://localhost:3001/api/${window.location.pathname.split('/')[2]}/booking`)
      .then(({ data }) => {
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

  getGuestsText() {
    const { countAdults, countChildren, countInfants } = this.props;
    let guestsText = '';
    let infantsText = '';

    if (countInfants === 1) {
      infantsText = ', 1 infant';
    } else if (countInfants > 0) {
      infantsText = `, ${countInfants} infants`;
    }

    if (countAdults + countChildren === 1) {
      guestsText = '1 guest';
    } else if (countAdults + countChildren > 1) {
      guestsText = `${countAdults + countChildren} guests`;
    }
    return guestsText + infantsText;
  }

  render() {
    const {
      bookedDatesObj,
      listingInfo,
    } = this.state;
    const {
      onToggleCalendar,
      onToggleGuests,
      isCalendarToggled,
      isGuestsToggled,
      checkinDate,
      checkoutDate,
      isCleaningFeeToggled,
      isServiceFeeToggled,
      isTaxesToggled,
      onToggleInfo,
      onToggleOff,
    } = this.props;

    return (
      <div className={styles.Booking}>
        <div
          className={styles.BookingForm}
          tabIndex="0"
          role="button"
          name="bookingForm"
          onClick={(e) => {
            if (isCalendarToggled || isGuestsToggled || isServiceFeeToggled || isTaxesToggled || isCleaningFeeToggled) {
              onToggleOff(e);
            }
          }}
        >
          <div className={styles.BookingFormOutline}>
            <div className={styles.BookingFormInnerOutline}>
              <div className={styles.BookingFormHeader}>
                <div className={styles.BookingFormHeaderPrice}>
                  <span className={styles.Price}>
                    $
                    {listingInfo.basePrice}
                  </span>
                  <span className={styles.PriceDesc}> per night</span>
                </div>
                <div className={styles.BookingFormHeaderStars}>
                  <span className={styles.Stars} />
                  <span>{listingInfo.views}</span>
                </div>
              </div>
              <form>
                <div className={styles.BookingFormBody}>
                  <div className={styles.Dates}>
                    <span className={styles.DatesText}>Dates</span>
                    <div className={styles.Checking}>
                      <input
                        type="button"
                        id="checkin"
                        value={checkinDate ? moment(checkinDate, 'YYYY-MM-DD').format('MM/DD/YYYY') : 'Check-in'}
                        name="Checkin"
                        onClick={e => onToggleCalendar(e)}
                      />
                      <svg id="arrow" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
                        <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" />
                      </svg>
                      <input
                        type="button"
                        id="checkout"
                        value={checkoutDate ? moment(checkoutDate, 'YYYY-MM-DD').format('MM/DD/YYYY') : 'Checkout'}
                        name="Checkout"
                        onClick={e => onToggleCalendar(e)}
                      />
                    </div>
                  </div>
                  <span className={styles.GuestsText}>Guests</span>
                  <div
                    tabIndex="-1"
                    className={styles.Guests}
                    role="button"
                    onClick={isGuestsToggled ? null : () => onToggleGuests()}
                  >
                    <input
                      id="guests"
                      value={this.getGuestsText()}
                      type="button"
                    />
                    {isGuestsToggled ? (
                      <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'currentcolor' }}>
                        <path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'currentcolor' }}>
                        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className={checkoutDate ? styles.DetailsShow : styles.DetailsHide}>
                    <span className={styles.DetailsItem}>
                      $
                      {listingInfo.basePrice}
                      {' x '}
                      {checkoutDate ? moment(checkoutDate).diff(moment(checkinDate), 'days') : 0}
                      {moment(checkoutDate).diff(moment(checkinDate), 'days') === 1 ? ' night' : ' nights'}
                    </span>
                    <span className={styles.DetailsPrice}>
                      {checkoutDate ? listingInfo.basePrice * moment(checkoutDate).diff(moment(checkinDate), 'days') : 0}
                    </span>
                    <span className={styles.DetailsItem}>
                      Cleaning fee
                      <button type="button" className={styles.CleaningFee} name="cleaningFee" onClick={e => onToggleInfo(e)}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                          <path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd" />
                        </svg>
                      </button>
                      <div className={isCleaningFeeToggled ? `${styles.DetailsInfo} ${styles.ShowItem}` : `${styles.DetailsInfo} ${styles.HideItem}`}>
                        One-time fee charged by host to cover the cost of cleaning their space.
                      </div>
                    </span>
                    <span className={styles.DetailsPrice}>
                      {listingInfo.cleaningFee}
                    </span>
                    <span className={styles.DetailsItem}>
                      Service fee
                      <button type="button" className={styles.ServiceFee} name="serviceFee" onClick={e => onToggleInfo(e)}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                          <path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd" />
                        </svg>
                      </button>
                      <div className={isServiceFeeToggled ? `${styles.DetailsInfo} ${styles.ShowItem}` : `${styles.DetailsInfo} ${styles.HideItem}`}>
                      This helps us run our platform and offer services like 24/7 support on your trip.
                      </div>
                    </span>
                    <span className={styles.DetailsPrice}>
                      {listingInfo.serviceFee}
                    </span>
                    <span className={styles.DetailsItem}>
                      Occupancy fee and taxes
                      <button type="button" className={styles.Taxes} name="taxes" onClick={e => onToggleInfo(e)}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                          <path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd" />
                        </svg>
                      </button>
                      <div className={isTaxesToggled ? `${styles.DetailsInfo} ${styles.ShowItem}` : `${styles.DetailsInfo} ${styles.HideItem}`}>
                      This helps us run our platform and offer services like 24/7 support on your trip.
                      </div>
                    </span>
                    <span className={styles.DetailsPrice}>
                      {listingInfo.taxes}
                    </span>
                    <span className={styles.DetailsTotal}>
                      Total:
                    </span>
                    <span className={styles.DetailsTotalPrice}>
                      {checkoutDate
                        ? listingInfo.basePrice * (moment(checkoutDate).diff(moment(checkinDate), 'days'))
                        + listingInfo.cleaningFee
                        + listingInfo.serviceFee
                        + listingInfo.taxes
                        : 0
                      }
                    </span>
                  </div>
                  <div className={styles.BookingFormButtonDiv}>
                    <button className={styles.BookingFormButton} type="button">
                      <span>Start Booking</span>
                    </button>
                  </div>
                  <div className={styles.BookingFormMessage}>
                    {"You won't be charged yet"}
                  </div>
                  <div className={styles.BookingFormFooter}>
                    <div className={styles.BookingFormAttention}>
                      This place is getting a lot of attention.
                    </div>
                    <div className={styles.BookingFormViewed}>
                      It’s been viewed 500+ times in the past week.
                    </div>
                    <div className={styles.Lightbulb} />
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
