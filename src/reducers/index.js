import { combineReducers } from 'redux';
import UniversityReducer from './reducer_university';

const rootReducer = combineReducers({
  university: UniversityReducer
});

export default rootReducer;
