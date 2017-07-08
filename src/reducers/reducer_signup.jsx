import _ from 'lodash';
import { SIGNUP } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case SIGNUP:
            return action.payload.data.message;

        default:
            return state;
    }
}