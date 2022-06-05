import { IS_LOADING } from '../actions/isLoading';

export default function isLoading(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.status;
    default:
      return state;
  }
}
