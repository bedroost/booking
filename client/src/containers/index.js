import { connect } from 'react-redux';
import Guests from '../components/Guests';
import { incrementAdults, decrementAdults, incrementChildren, decrementChildren } from '../actions';

const mapStateToProps = (state) => {
  return {
    countAdults: state.countAdults,
    countChildren: state.countChildren,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementAdults: () => {
      console.log('[maptoprops] increment', incrementAdults());
      dispatch(incrementAdults());
    },
    decrementAdults: () => dispatch(decrementAdults()),
    incrementChildren: () => {
      console.log('[maptoprops] increment', incrementChildren());
      dispatch(incrementChildren());
    },
    decrementChildren: () => dispatch(decrementChildren()),
  };
};

const GuestsContainer = connect(mapStateToProps, mapDispatchToProps)(Guests);

export default GuestsContainer;
