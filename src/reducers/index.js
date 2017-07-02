import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UniversityReducer from './reducer_university';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  university: UniversityReducer,
  loginStatus: LoginReducer,
  form: formReducer
});

export default rootReducer;
