import { combineReducers } from 'redux';
import isLoading from './isLoading';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

export default combineReducers({
  isLoading,
  authedUser,
  users,
  questions,
});
