import React from 'react';
import styles from '../../styles/guests.module.css';

const Guests = (props) => {
  const {
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
    <div className={isGuestsToggled ? [styles.GuestModal, styles.Show].join(' ') : [styles.GuestModal, styles.Hide].join(' ')}>
      <div className={styles.GuestRow}>
        <div className={styles.textAdults}>Adults</div>
        <input
          type="button"
          className={styles.decrementAdults}
          onClick={decrementAdults}
          disabled={allowDecrementAdults}
          value="&#8211;"
        />
        <span className={styles.countAdults}>{countAdults}</span>
        <input
          type="button"
          className={styles.incrementAdults}
          onClick={incrementAdults}
          disabled={allowIncrementAdults}
          value="+"
        />
      </div>
      <div className={styles.GuestRow}>
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
        <span className={styles.countChildren}>{countChildren}</span>
        <input
          type="button"
          className={styles.incrementChildren}
          onClick={incrementChildren}
          disabled={allowIncrementChildren}
          value="+"
        />
      </div>
      <div className={styles.GuestRow}>
        <div className={styles.textInfants}>
          <span>Infants</span>
          <br />
          <span className={styles.age}>Ages 0–2</span>
        </div>
        <input
          type="button"
          className={styles.decrementInfants}
          onClick={decrementInfants}
          disabled={allowDecrementInfants}
          value="&#8211;"
        />
        <span className={styles.countInfants}>{countInfants}</span>
        <input
          type="button"
          className={styles.incrementInfants}
          onClick={incrementInfants}
          disabled={allowIncrementInfants}
          value="+"
        />
      </div>
      <div className={styles.MaxGuestsTextRow}>
        <span className={styles.MaxGuestsText}>
          {`${listingInfo.maxGuests} `}
          guests maximum. Infants don’t count toward the number of guests.
        </span>
      </div>
      <div className={styles.CloseButtonRow}>
        <input
          type="button"
          className={styles.CloseButton}
          value="Close"
          onClick={() => onToggleGuests()}
        />
      </div>
    </div>
  );
};
export default Guests;
