import axios from 'axios';

export const FETCH_UNIVERSITY = "fetch_university";

const ROOT_URL = 'http://jusbuss.herokuapp.com';

export function fetchUniverisity(){
    const request = axios.get(`${ROOT_URL}/university`);

    return  {
        type: FETCH_UNIVERSITY,
        payload: request
    };
}