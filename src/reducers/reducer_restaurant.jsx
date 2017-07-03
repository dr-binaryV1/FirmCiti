import _ from 'lodash';
import { FETCH_RESTAURANTS, FETCH_RESTAURANT_DETAIL } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_RESTAURANTS:
            return _.mapKeys(action.payload.data, '_id');

        case FETCH_RESTAURANT_DETAIL:
            return { ...state, [action.payload.data._id]: action.payload.data };

        default:
            return state;
    }
}