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
  FILTER_RESULTS,
} from "./types";

const initialState = {
  search: [], //
  searchId: [], //
  all: [], //
  temperaments: [], //
  createDogs: [], //
  filtered: [],
  filters: {
    order: null,
    oldNew: null,
    temperament: null,
    search: null,
  },
};

const filterResultsByCriteria = (filters, resultsToFilter) => {
  let filterResults = resultsToFilter;
  if (filters.search) {
    filterResults = filterResults.filter((dog) =>
      dog.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }
  if (filters.temperament) {
    filterResults = filterResults.filter((dog) => {
      return (
        dog.temperament !== undefined &&
        dog.temperament.includes(filters.temperament)
      );
    });
  }
  if (filters.order) {
    filterResults.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA > nameB) {
        return filters.order === "asc" ? 1 : -1;
      } else if (nameA < nameB) {
        return filters.order === "desc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  if (filters.oldNew) {
    if (filters.oldNew === "new") {
      filterResults = filterResults.filter((dog) => dog.createdInDb);
    }
    if (filters.oldNew === "old") {
      filterResults = filterResults.filter((dog) => !dog.createdInDb);
    }
  }

  return filterResults;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL:
      return { ...state, all: payload, filtered: payload };

    case SEARCHID:
      return { ...state, searchId: payload };

    case FILTER_RESULTS:
      return {
        ...state,
        filtered: filterResultsByCriteria(payload, state.all),
        filters: payload,
      };

    case SEARCH:
      return { ...state, search: payload, filtered: payload };

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
        filterOldNew = state.filtered.filter((dog) => dog.createdInDb);
      } else if (payload === "old") {
        filterOldNew = state.filtered.filter((dog) => !dog.createdInDb);
      } else {
        filterOldNew = state.filtered;
      }
      return { ...state, filtered: filterOldNew };

    case FILTER_TEMPERAMENT:
      const temperamentFilter = [...state.filtered].filter((dog) => {
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
