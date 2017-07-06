import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import EventReducer from './reducer_event';
import HouseReducer from './reducer_house';
import UniversityReducer from './reducer_university';
import RestaurantReducer from './reducer_restaurant';
import CommentReducer from './reducer_comment';
import LoginReducer from './reducer_login';
import SignupReducer from './reducer_signup';

const rootReducer = combineReducers({
  events: EventReducer,
  houses: HouseReducer,
  universities: UniversityReducer,
  restaurants: RestaurantReducer,
  loginStatus: LoginReducer,
  signupStatus: SignupReducer,
  comment: CommentReducer,
  form: formReducer
});

export default rootReducer;
