import { FETCH_JOKESTOLD } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_JOKESTOLD:
    // ES5 -> return state.concat([ action.payload.data ]);
    // ES6 (below)
    return [ action.payload.data, ...state ];
  }

  // console.log('Action received', action);
  return state;
}