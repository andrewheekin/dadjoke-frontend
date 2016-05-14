import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  jokes: WeatherReducer
});

export default rootReducer;
