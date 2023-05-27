// import { filterOldNew } from "./action";
import {
  SEARCH,
  SEARCHID,
  ALL,
  TEMPERAMENTS,
  CREATEDOGS,
  ORDER,
  FILTER_OLD_NEW,
  FILTER_TEMPERAMENT,
} from "./types";
const initialState = {
  search: [],
  searchId: [],
  all: [],
  temperaments: [],
  createDogs: [],
  filtered: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL:
      return { ...state, all: payload, filtered: payload };

    case SEARCHID:
      return { ...state, searchId: payload };

    case TEMPERAMENTS:
      return { ...state, temperaments: payload };

    case CREATEDOGS:
      return { ...state, createDogs: payload };

    case ORDER:
      const filterOrder = [...state.filtered];
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
      return { ...state, filtered: filterOrder };

    case FILTER_OLD_NEW:
      let filterOldNew;
      if (payload === "new") {
        filterOldNew = state.all.filter((dog) => dog.createdInDb);
      } else if (payload === "old") {
        filterOldNew = state.all.filter((dog) => !dog.createdInDb);
      } else {
        filterOldNew = state.all;
      }
      return { ...state, filtered: filterOldNew };

    case FILTER_TEMPERAMENT:
      const temperamentFilter = [...state.all].filter((dog) => {
        return (
          dog.temperament !== undefined && dog.temperament.includes(payload)
        );
      });
      return { ...state, filtered: temperamentFilter };

    default:
      return { ...state };
  }
};

export default reducer;
