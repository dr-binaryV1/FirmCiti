import axios from 'axios';

export const FETCH_EVENTS = "fecth_events";
export const FETCH_HOUSES = "fetch_houses";
export const FETCH_HOUSE = "fetch_house";
export const FETCH_SCHOOL = "fetch_school";
export const FETCH_CATEGORIES = "fetch_categories";
export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_RESTAURANT_DETAIL = "fetch_restaurant_detail";
export const FETCH_RESTAURANT_COMMENTS = "fetch_restaurant_comments";
export const POST_COMMENT = "post_comment";
export const UPLOAD_IMAGES = "upload_images";
export const LOGIN = "login";
export const SIGNOUT = "signout";
export const SIGNUP = "signup";

const ROOT_URL = 'http://jusbuss.herokuapp.com';

export function fetchEvents(){
    const request = axios.get(`${ROOT_URL}/entertainment`);

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}

export function fetchHouses(){
    const request = axios.get(`${ROOT_URL}/rentals`);

    return {
        type: FETCH_HOUSES,
        payload: request
    }
}

export function fetchHouse(id){
    const request = axios.get(`${ROOT_URL}/rentals/${id}`);

    return {
        type: FETCH_HOUSE,
        payload: request
    }
}

export function fetchSchool(){
    const request = axios.get(`${ROOT_URL}/university`);

    return  {
        type: FETCH_SCHOOL,
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

export function fetchCategories(){
    const request = axios.get(`${ROOT_URL}/categories`);

    return {
        type: FETCH_CATEGORIES,
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

export function fetchRestaurantComments(id){
    const request = axios.get(`${ROOT_URL}/dining/${id}/comments`);

    return {
        type: FETCH_RESTAURANT_COMMENTS,
        payload: request
    }
}

export function postRestaurantComment(values, id){
    const request = axios.post(`${ROOT_URL}/dining/${id}/comments`, values);

    return {
        type: POST_COMMENT,
        payload: request
    }
}

export function postImages(values){
    const request = axios.post(`${ROOT_URL}/profilepicture/upload`, values);

    return {
        type: UPLOAD_IMAGES,
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

export function signout(){
    const request =axios.get(`${ROOT_URL}/logout`);

    return {
        type: SIGNOUT,
        payload: request
    };
}

export function signup(values){
    const request = axios.post(`${ROOT_URL}/users`, values);

    return {
        type: SIGNUP,
        payload: request
    }
}
