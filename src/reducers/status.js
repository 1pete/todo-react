import { FILTER_TODO } from '../actions';

const status = (state = 'ALL', action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.status;
    default:
      return state;
  }
};

export default status;
