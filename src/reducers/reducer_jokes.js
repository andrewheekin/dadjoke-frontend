import { FETCH_JOKESTOLD } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_JOKESTOLD:
    return [ action.payload.data, ...state ];
  }

  return state;
}