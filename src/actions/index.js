import axios from 'axios';

export const FETCH_UNIVERSITY = "fetch_university";
export const FETCH_RESTAURANT = "fetch_restaurant";
export const LOGIN = "login";

const ROOT_URL = 'http://jusbuss.herokuapp.com';

export function fetchUniverisity(){
    const request = axios.get(`${ROOT_URL}/university`);

    return  {
        type: FETCH_UNIVERSITY,
        payload: request
    };
}

export function fetchRestaurant(){
    const request = axios.get(`${ROOT_URL}/dining`);

    return {
        type: FETCH_RESTAURANT,
        payload: request
    }
}

export function login(values){
    const request = axios.post(`${ROOT_URL}/login`, values);

    return {
        type: LOGIN,
        payload: request
    };
}