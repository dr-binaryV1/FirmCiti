import _ from 'lodash';
import { FETCH_RESTAURANT } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_RESTAURANT:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}