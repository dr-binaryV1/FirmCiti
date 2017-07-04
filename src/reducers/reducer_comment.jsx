import _ from 'lodash';
import { POST_COMMENT, FETCH_RESTAURANT_COMMENTS } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case POST_COMMENT:
            return _.mapKeys(action.payload.data, '_id');

        case FETCH_RESTAURANT_COMMENTS:
            return _.mapKeys(action.payload.data, '_id');

        default:
            return state;
    }
}