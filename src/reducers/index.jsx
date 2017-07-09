import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import EventReducer from './reducer_event';
import HouseReducer from './reducer_house';
import SchoolReducer from './reducer_school';
import RestaurantReducer from './reducer_restaurant';
import CommentReducer from './reducer_comment';
import LoginReducer from './reducer_login';
import SignupReducer from './reducer_signup';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
  events: EventReducer,
  houses: HouseReducer,
  schools: SchoolReducer,
  restaurants: RestaurantReducer,
  loginStatus: LoginReducer,
  signupStatus: SignupReducer,
  comment: CommentReducer,
  session: sessionReducer,
  form: formReducer
});

export default rootReducer;
