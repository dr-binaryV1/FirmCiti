import _ from 'lodash';
import { LOGIN } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case LOGIN:
            console.log(action.payload.data)
            return action.payload.data;
        default:
            return state;
    }
}