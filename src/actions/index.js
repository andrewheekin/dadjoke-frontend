import axios from 'axios'

const ROOT_URL = 'http://localhost:5000';

export const FETCH_JOKESTOLD = 'FETCH_JOKESTOLD';
export const SEND_JOKE = 'SEND_JOKE';
export const TEST_POST = 'TEST_POST';


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

  const request = axios.post(url, phone)
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


export function testPost(phone) {
  const url = `${ROOT_URL}/testPost`;

  phone = '+1' + phone.replace(/[- )()]/g, '');

  const request = axios.post(url, {"phone":"+14043043723"})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });  

  return {
    type: TEST_POST,
    payload: request
  };
}