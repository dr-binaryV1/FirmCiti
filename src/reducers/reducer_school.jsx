import _ from 'lodash';
import { FETCH_SCHOOL } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_SCHOOL:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}