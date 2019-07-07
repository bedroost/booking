import React from 'react';

const Guests = (props) => {
  const {
    countAdults,
    incrementAdults,
    decrementAdults,
    countChildren,
    incrementChildren,
    decrementChildren,
  } = props;

  return (
    <div className="GuestModal">
      <div className="GuestRow">
        <div className="textAdults">Adults</div>
        <input
          type="button"
          className="decrementAdults"
          onClick={decrementAdults}
          value="-"
        />
        <span className="countAdults">{countAdults}</span>
        <input
          type="button"
          className="incrementAdults"
          onClick={incrementAdults}
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
          value="-"
        />
        <span className="countChildren">{countChildren}</span>
        <input
          type="button"
          className="incrementChildren"
          onClick={incrementChildren}
          value="+"
        />
      </div>
      <span>2 guests maximum. Infants don’t count toward the number of guests.</span>
    </div>
  );
};
export default Guests;
