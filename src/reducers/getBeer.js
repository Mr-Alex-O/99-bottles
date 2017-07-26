import { GET_BEER} from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case GET_BEER:

    return [ action.payload.data, ...state];
  }
  return state;
}
