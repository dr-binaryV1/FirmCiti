import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UniversityReducer from './reducer_university';
import RestaurantReducer from './reducer_restaurant';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  university: UniversityReducer,
  restaurants: RestaurantReducer,
  loginStatus: LoginReducer,
  form: formReducer
});

export default rootReducer;
