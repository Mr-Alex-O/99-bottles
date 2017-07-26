import axios from 'axios';

const API_KEY = '';
const ROOT_URL = 'http://localhost:3000/';

//example search = http://api.brewerydb.com/v2/locations?locality=titusville&region=Florida&key=53c34a34f0a5f02c55409dc00e19e304

export const GET_BEER = 'GET_BEER';

export function getBeer (city, state) {
  const url = `${ROOT_URL}locations?locality=${city}&region=${state}`
  const request = axios.get(url);
  console.log(`Url: ${url}`);
  console.log(`Request: ${request.data}`);

  return {
    type: GET_BEER,
    payload: request
  }

}
