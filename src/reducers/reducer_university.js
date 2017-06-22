import _ from 'lodash';
import { FETCH_UNIVERSITY } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_UNIVERSITY:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}