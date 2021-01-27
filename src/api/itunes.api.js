import axios from "axios";

export const ITUNES_API = ' https://itunes.apple.com/search';

// export function searchItunesItems(searchTerm = '', limit = 25) {
//   const URL = `${ITUNES_API}/search?term=${searchTerm}&limit=${limit}`;
//   return fetch(URL).then(response => response.json());
// }

export function searchItunesItems(searchTerm = '', limit = 25) {
  const URL = `${ITUNES_API}/search?term=${searchTerm}&limit=${limit}`;
  return axios.get(URL);
}
