import axios from 'axios'

const ROOT_URL = 'https://dadjokeserver.com';

export const FETCH_JOKESTOLD = 'FETCH_JOKESTOLD';
export const SEND_JOKE = 'SEND_JOKE';

export function fetchJokestold() {
  const url = `${ROOT_URL}/jokestold`;
  const request = axios.get(url);

  return {
    type: FETCH_JOKESTOLD,
    payload: request
  };
}

export function sendJoke(phone) {
  const url = `${ROOT_URL}/jokeWeb`;

  phone = '+1' + phone.replace(/[- )()]/g, '');

  const request = axios.post(url, {"phone":phone});  

  return {
    type: SEND_JOKE,
    payload: request
  };
}