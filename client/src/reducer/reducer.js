import {
  SEARCH,
  SEARCHID,
  ALL,
  TEMPERAMENTS,
  CREATEDOGS,
  ORDER,
} from "./types";
const initialState = {
  search: [],
  searchId: [],
  all: [],
  temperaments: [],
  createDogs: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL:
      return { ...state, all: payload };

    case SEARCHID:
      return { ...state, searchId: payload };

    case TEMPERAMENTS:
      return { ...state, temperaments: payload };

    case CREATEDOGS:
      return { ...state, createDogs: payload };

    case ORDER:
      const filterOrder = [...state.all];
      filterOrder.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return payload === "asc" ? 1 : -1;
        } else if (nameA < nameB) {
          return payload === "desc" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return { ...state, all: filterOrder };

    default:
      return { ...state };
  }
};

export default reducer;
