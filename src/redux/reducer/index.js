import { combineReducers } from 'redux';
import users from './users';
import bookings from './bookings';

export default combineReducers({
  users,
  bookings,
});
