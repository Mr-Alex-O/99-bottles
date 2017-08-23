import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/';

//example search = http://api.brewerydb.com/v2/locations?locality=titusville&region=Florida&key=

export const GET_BREWERIES = 'get_breweries';
export const GET_BREWERY = 'get_brewery';

export function getBreweries (city, state) {
  const url = `${ROOT_URL}locations?locality=${city}&region=${state}`;
  const request = axios.get(url);
  console.log(`Url: ${url}`);

  return {
    type: GET_BREWERIES,
    payload: request
  }
}

export function getBrewery(id) {
  const url = `${ROOT_URL}brewery/${id}`;
  const request = axios.get(url);
  console.log(`getBrewery URL:`, url);

  return {
    type: GET_BREWERY,
    payload: request
  };
}
