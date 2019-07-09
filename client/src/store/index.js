import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import guestsReducer from '../reducers/guests';
import calendarReducer from '../reducers/calendar';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  guestsReducer,
  calendarReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
console.log(store.getState());

export default store;
