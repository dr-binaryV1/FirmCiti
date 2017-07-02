import _ from 'lodash';
import { LOGIN } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case LOGIN:
            if(action.payload.data !== undefined){
                console.log(action.payload);
                if(action.payload.data.error !== undefined){
                    return action.payload.data.error.message;
                }

                if(action.payload.data !== undefined){
                    return action.payload.data.message;
                } 
            }
        default:
            return state;
    }
}