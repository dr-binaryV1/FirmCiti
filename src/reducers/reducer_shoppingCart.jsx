import _ from 'lodash';
import { ADD_TO_CART } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case ADD_TO_CART:
            return action.payload.data;

        default:
            return state;
    }
}