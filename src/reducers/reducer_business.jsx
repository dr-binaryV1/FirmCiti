import { POST_BUSINESS } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case POST_BUSINESS:
            return action.payload.data.message;
        
        default:
            return state;
    }
}