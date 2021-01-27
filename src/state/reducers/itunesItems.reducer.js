import { UPDATE_APP_INFO } from "../actions/appInfo.actions";
import { ITUNES_ITEMS_FAILED, ITUNES_ITEMS_REQUESTED, ITUNES_ITEMS_SUCCEEDED } from "../actions/itunesItems.action";

const initialState = {
  items: [],
  loading: false,
  loaded: false,
  totalItems: 0,
  error: null,
};

export function itunesItemsReducer(state = initialState, action) {
  switch (action.type) {
    case ITUNES_ITEMS_REQUESTED: {
      return {
        ...state,
        loading: true,
        items: [],
        loaded: false,
        totalItems: 0,
      };
    }

    case ITUNES_ITEMS_SUCCEEDED: {
      const { result } = action.payload;
      return {
        ...state,
        loading: false,
        items: result.results,
        loaded: true,
        totalItems: result.resultCount,
      };
    }

    case ITUNES_ITEMS_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
        loading: false,
        items: [],
        loaded: false,
        totalItems: 0,
      };
    }

    default: {
      return state;
    }
  }
}
