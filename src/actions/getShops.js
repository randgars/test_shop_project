import {
  GET_SHOPS_SUCCESS
} from './const';

import axios from 'axios';

export default function getShops() {
  return (dispatch) => {
    axios.get('../mock/shops.json')
    .then(
      res => {
        dispatch({ type: GET_SHOPS_SUCCESS, shops: res.data });
      },
      err => {
        window.console.log('errors: ', err)
      })
    .catch(err => {
      window.console.log('catch errors: ', err)
    });
  };
}