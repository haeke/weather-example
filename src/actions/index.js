import axios from 'axios';

const API_KEY = '296b5dc6bb073e667022eaf683466ba8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const GET_WEATHER = 'GET_WEATHER';

// AJAX request to the weatherdata API
export function getWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;

  //make AJAX request to the weather API - returns a promise
  const request = axios.get(url);

  return {
    type: 'GET_WEATHER',
    payload: request,
  };
}
