import axios from "axios";
import {
  SEARCH,
  SEARCHID,
  ALL,
  TEMPERAMENTS,
  CREATEDOGS,
  ORDER,
  FILTER_OLD_NEW,
  FILTER_TEMPERAMENT,
  FILTER_RESULTS,
} from "./types";

const endpoint = "http://localhost:3001";

export const all = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/dogs`);
      return dispatch({
        type: ALL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const temperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/temperaments`);
      return dispatch({
        type: TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/dogs/${id}`);
      return dispatch({
        type: SEARCHID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchName = (name) => {
  return function (dispatch) {
    return axios
      .get(`${endpoint}/dogs/?search=${name}`)
      .then(({ data }) => {
        dispatch({
          type: SEARCH,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const createDogs = (bodyDog) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${endpoint}/dogs/`, bodyDog);
      return dispatch({
        type: CREATEDOGS,
        payload: data,
      });
    } catch (error) {}
  };
};

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function filterOldNew(oldNew) {
  return {
    type: FILTER_OLD_NEW,
    payload: oldNew,
  };
}

export function filterTemperament(temperament) {
  return {
    type: FILTER_TEMPERAMENT,
    payload: temperament,
  };
}

export function filterResults(filters) {
  return {
    type: FILTER_RESULTS,
    payload: filters,
  };
}
