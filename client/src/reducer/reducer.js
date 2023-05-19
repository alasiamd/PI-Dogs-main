import { SEARCH, SEARCHID, ALL } from "./types";
const initialState = {
    search: [],
    searchId: [],
    all: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ALL:
            return { ...state, all: payload }

        default:
            return { ...state };
    }
}

export default reducer;