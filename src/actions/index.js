import axios from 'axios';

export const FETCH_UNIVERSITY = "fetch_university";
export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_RESTAURANT_DETAIL = "fetch_restaurant_detail";
export const LOGIN = "login";
export const SIGNUP = "signup";

const ROOT_URL = 'http://jusbuss.herokuapp.com';

export function fetchUniverisity(){
    const request = axios.get(`${ROOT_URL}/university`);

    return  {
        type: FETCH_UNIVERSITY,
        payload: request
    };
}

export function fetchRestaurants(){
    const request = axios.get(`${ROOT_URL}/dining`);

    return {
        type: FETCH_RESTAURANTS,
        payload: request
    }
}

export function fetchRestaurantDetail(id){
    const request = axios.get(`${ROOT_URL}/dining/${id}`);

    return {
        type: FETCH_RESTAURANT_DETAIL,
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

export function signup(values){
    const request = axios.post(`${ROOT_URL}/signup`, values);

    return {
        type: SIGNUP,
        payload: request
    }
}