import React from 'react';
import styles from '../../styles/guests.module.css';

const Guests = (props) => {
  const {
    bookedDates,
    listingInfo,
    countAdults,
    incrementAdults,
    decrementAdults,
    countChildren,
    incrementChildren,
    decrementChildren,
    countInfants,
    incrementInfants,
    decrementInfants,
    isGuestsToggled,
    onToggleGuests,
  } = props;

  const allowDecrementAdults = countAdults === 1;
  const allowDecrementChildren = countChildren === 0;
  const allowDecrementInfants = countInfants === 0;

  const allowIncrementAdults = countAdults + countChildren === listingInfo.maxGuests;
  const allowIncrementChildren = allowIncrementAdults;
  const allowIncrementInfants = countInfants === 5;

  return (
    <div className={isGuestsToggled ? 'GuestModal Show' : 'GuestModal Hide'}>
      <div className="GuestRow">
        <div className="textAdults">Adults</div>
        <input
          type="button"
          className="decrementAdults"
          onClick={decrementAdults}
          disabled={allowDecrementAdults}
          value="&#8211;"
        />
        <span className="countAdults">{countAdults}</span>
        <input
          type="button"
          className="incrementAdults"
          onClick={incrementAdults}
          disabled={allowIncrementAdults}
          value="+"
        />
      </div>
      <div className="GuestRow">
        <div className="textChildren">
          <span>Children</span>
          <br />
          <span className="age">Ages 2–12</span>
        </div>
        <input
          type="button"
          className="decrementChildren"
          onClick={decrementChildren}
          disabled={allowDecrementChildren}
          value="&#8211;"
        />
        <span className="countChildren">{countChildren}</span>
        <input
          type="button"
          className="incrementChildren"
          onClick={incrementChildren}
          disabled={allowIncrementChildren}
          value="+"
        />
      </div>
      <div className="GuestRow">
        <div className="textInfants">
          <span>Infants</span>
          <br />
          <span className="age">Ages 0–2</span>
        </div>
        <input
          type="button"
          className="decrementInfants"
          onClick={decrementInfants}
          disabled={allowDecrementInfants}
          value="&#8211;"
        />
        <span className="countInfants">{countInfants}</span>
        <input
          type="button"
          className="incrementInfants"
          onClick={incrementInfants}
          disabled={allowIncrementInfants}
          value="+"
        />
      </div>
      <div className="MaxGuestsTextRow">
        <span className="MaxGuestsText">
          {`${listingInfo.maxGuests} `}
          guests maximum. Infants don’t count toward the number of guests.
        </span>
      </div>
      <div className="CloseButtonRow">
        <input
          type="button"
          className="CloseButton"
          value="Close"
          onClick={() => onToggleGuests()}
        />
      </div>
    </div>
  );
};
export default Guests;
