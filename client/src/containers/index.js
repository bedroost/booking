import { connect } from 'react-redux';
import Guests from '../components/Guests';
import {
  incrementAdults,
  decrementAdults,
  incrementChildren,
  decrementChildren,
  incrementInfants,
  decrementInfants,
} from '../actions/guests';

const mapStateToProps = state => ({
  countAdults: state.countAdults,
  countChildren: state.countChildren,
  countInfants: state.countInfants,
});

const mapDispatchToProps = dispatch => ({
  incrementAdults: () => dispatch(incrementAdults()),
  decrementAdults: () => dispatch(decrementAdults()),
  incrementChildren: () => dispatch(incrementChildren()),
  decrementChildren: () => dispatch(decrementChildren()),
  incrementInfants: () => dispatch(incrementInfants()),
  decrementInfants: () => dispatch(decrementInfants()),
});

const GuestsContainer = connect(mapStateToProps, mapDispatchToProps)(Guests);

export default GuestsContainer;
