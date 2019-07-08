import React from 'react';

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
  } = props;

  const allowDecrementAdults = countAdults === 1;
  const allowDecrementChildren = countChildren === 0;
  const allowDecrementInfants = countInfants === 0;

  const allowIncrementAdults = countAdults + countChildren === listingInfo.maxGuests;
  const allowIncrementChildren = allowIncrementAdults;

  return (
    <div className="GuestModal">
      <div className="GuestRow">
        <div className="textAdults">Adults</div>
        <input
          type="button"
          className="decrementAdults"
          onClick={decrementAdults}
          disabled={allowDecrementAdults}
          value="-"
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
          <span>Ages 2–12</span>
        </div>
        <input
          type="button"
          className="decrementChildren"
          onClick={decrementChildren}
          disabled={allowDecrementChildren}
          value="-"
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
          <span>Ages 0–2</span>
        </div>
        <input
          type="button"
          className="decrementInfants"
          onClick={decrementInfants}
          disabled={allowDecrementInfants}
          value="-"
        />
        <span className="countInfants">{countInfants}</span>
        <input
          type="button"
          className="incrementInfants"
          onClick={incrementInfants}
          value="+"
        />
      </div>
      <span>
        {`${listingInfo.maxGuests} `}
        guests maximum. Infants don’t count toward the number of guests.
      </span>
    </div>
  );
};
export default Guests;
