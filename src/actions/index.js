import axios from 'axios'

const ROOT_URL = 'http://104.236.88.113';

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
  const url = `${ROOT_URL}/sendJoke`;

  phone = '+1' + phone.replace(/[- )()]/g, '');

  const request = axios.post(url, {
    Body: '-dadjoke from web-',
    From: phone,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });  

  return {
    type: SEND_JOKE,
    payload: request
  };
}