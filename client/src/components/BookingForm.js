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
    const { bookedDatesObj, listingInfo } = this.state;
    const {
      onToggleCalendar,
      onToggleGuests,
      isCalendarToggled,
      isGuestsToggled,
      checkinDate,
      checkoutDate,
    } = this.props;

    return (
      <div className={styles.Booking}>
        <div
          className={styles.BookingForm}
          tabIndex="0"
          role="button"
          onClick={() => {
            if (isCalendarToggled) {
              onToggleCalendar();
            }
            if (isGuestsToggled) {
              onToggleGuests();
            }
          }}
        >
          <div className={styles.BookingFormOutline}>
            <div className={styles.BookingFormInnerOutline}>
              {/* <button className={styles.BookingFormCloseButton}>
                <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: '16px', width: '16px', display: 'block', fill: 'rgb(118, 118, 118)'}}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
              </button> */}
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
                      <svg id="arrow" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" ><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"></path></svg>
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
                    {isGuestsToggled
                      ? <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'currentcolor' }}><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd"></path></svg>
                      : <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'currentcolor' }}><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></svg>
                    }
                  </div>
                  <div className={checkoutDate ? styles.DetailsShow : styles.DetailsHide}>
                    <span className={styles.DetailsItem}>${listingInfo.basePrice} x {moment(checkoutDate).diff(moment(checkinDate), 'days')} nights</span>
                    <span className={styles.DetailsPrice}>${listingInfo.basePrice * moment(checkoutDate).diff(moment(checkinDate), 'days')}</span>
                    <span className={styles.DetailsItem}>Cleaning fee</span>
                    <span className={styles.DetailsPrice}>${listingInfo.cleaningFee}</span>
                    <span className={styles.DetailsItem}>Service fee</span>
                    <span className={styles.DetailsPrice}>${listingInfo.serviceFee}</span>
                    <span className={styles.DetailsItem}>Occupancy fee and taxes</span>
                    <span className={styles.DetailsPrice}>${listingInfo.taxes}</span>
                    <span className={styles.DetailsTotal}>Total: </span>
                    <span className={styles.DetailsTotalPrice}>${listingInfo.basePrice * moment(checkoutDate).diff(moment(checkinDate), 'days') + listingInfo.cleaningFee + listingInfo.serviceFee + listingInfo.taxes}</span>
                  </div>
                  <div className={styles.BookingFormButtonDiv}>
                    <button className={styles.BookingFormButton} type="button">
                      <span>Start Booking</span>
                    </button>
                  </div>
                  <div className={styles.BookingFormMessage}>You won't be charged yet</div>
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
