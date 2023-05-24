import { SEARCH, SEARCHID, ALL, TEMPERAMENTS, CREATEDOGS } from "./types";
const initialState = {
    search: [],
    searchId: [],
    all: [],
    temperaments: [],
    createDogs: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ALL:
            return { ...state, all: payload }

        case SEARCHID:
            return { ...state, searchId: payload }

        case TEMPERAMENTS:
            return {...state, temperaments: payload}

        case CREATEDOGS:
            return {...state, createDogs: payload}

        default:
            return { ...state };
    }
}

export default reducer;