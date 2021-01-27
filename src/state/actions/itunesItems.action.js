export const ITUNES_ITEMS_REQUESTED = 'ITUNES_ITEMS_REQUESTED';
export const ITUNES_ITEMS_SUCCEEDED = 'ITUNES_ITEMS_SUCCEEDED';
export const ITUNES_ITEMS_FAILED = 'ITUNES_ITEMS_FAILED';

const defaultSearchParams = { term: '' };

export function searchItunesItems(searchParams = defaultSearchParams) {
  return {
    type: ITUNES_ITEMS_REQUESTED,
    payload: {
      searchParams,
    }
  }
}

export function searchItunesItemsSucceeded(result) {
  return {
    type: ITUNES_ITEMS_SUCCEEDED,
    payload: {
      result,
    }
  }
}


export function searchItunesItemsFailed(error) {
  return {
    type: ITUNES_ITEMS_FAILED,
    payload: {
      error,
    }
  }
}
