import _ from 'lodash';
import { LOGIN,SIGNOUT } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case LOGIN:
            return action.payload.data;

        case SIGNOUT:
            return action.payload.data.message;

        default:
            return state;
    }
}