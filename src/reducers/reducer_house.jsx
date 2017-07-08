import _ from 'lodash';
import { FETCH_HOUSES } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_HOUSES:
            return _.mapKeys(action.payload.data, '_id');
        
        default:
            return state;
    }
}