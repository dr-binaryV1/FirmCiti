import { combineReducers } from 'redux';
import UniversityReducer from './reducer_university';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  university: UniversityReducer,
  form: formReducer
});

export default rootReducer;
