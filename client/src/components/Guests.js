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
        <div className="textAdults">adults</div>
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
        <div className="textChildren">children</div>
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
    </div>
  );
};
export default Guests;
