import axios from 'axios';
import { SEARCH, SEARCHID, ALL } from "./types";

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