import { GET_BREWERIES, GET_BREWERY } from '../actions/index';

export default function(state = [], action) {
    console.log('getBeer.js action:', action);
  switch(action.type) {
    case GET_BREWERY:
      console.log(action.payload);
      // const brewery = action.payload.data;
      // const newState = { ...state };
      // newState[brewery.id] = brewery;
      // return newState;
      return { ...state, [action.payload.data.data.id]: action.payload.data.data };

    case GET_BREWERIES:
      return action.payload.data.data;

    default: {
      return [...state]
    }
  }
}
