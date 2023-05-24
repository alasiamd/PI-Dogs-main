import axios from 'axios';
import { SEARCH, SEARCHID, ALL, TEMPERAMENTS, CREATEDOGS } from "./types";

const endpoint = 'http://localhost:3001';

export const all = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${endpoint}/dogs`);
            return dispatch({
                type: ALL,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const temperaments = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/temperaments`);
            return dispatch({
                type: TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}


export const searchId = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${endpoint}/dogs/${id}`);
            return dispatch({
                type: SEARCHID,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const createDogs = (bodyDog) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`${endpoint}/dogs/`, bodyDog);
            return dispatch({
                type: CREATEDOGS,
                payload: data
            });
        } catch (error) {
            
        }
    }
}
