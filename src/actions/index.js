import axios from 'axios';

//For different devices, we can make a function that takes a device id and finds it

//https://obscure-plateau-31248.herokuapp.com/api/device/#

//floors without image
//https://obscure-plateau-31248.herokuapp.com/api/floorsfast

//device type
//https://obscure-plateau-31248.herokuapp.com/api/devicetype

//floors
//const F_API_URL = 'https://obscure-plateau-31248.herokuapp.com/api/floors';

export const FETCH_FLOORS = 'FETCH_FLOORS';
export const FETCH_DEVICES = 'FETCH_DEVICES';

export function fetchDevices() {
  //devices
  const API_URL = 'https://polar-bayou-68883.herokuapp.com/api/devwithname';

  //returns a promise
  const request = axios.get(API_URL);
  //console.log('Request', request);
  return {
    type: FETCH_DEVICES,
    payload: request
  };
}

export function fetchFloors() {
  //devices
  const API_URL = 'https://obscure-plateau-31248.herokuapp.com/api/floorsfast';

  //returns a promise
  const request = axios.get(API_URL);
  //console.log('Request', request);
  return {
    type: FETCH_FLOORS,
    payload: request
  };
}
