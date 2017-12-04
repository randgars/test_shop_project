import {
  ADD_SHOP
} from './const';

import getGeolocation from '../sources/getGeolocation';

export default function addShop(shops, values) {
  return (dispatch) => {
    if (!shops) {
      return window.console.err('"shops" is undefined');
    }
    const tempShops = Object.assign([], shops);
    const shop = {
      serial_number: tempShops.length + 1,
      id: +Math.random().toString().substr(2),
      address: `${values.city}, ${values.address}`,
      mode: `${values.startTime}-${values.endTime}`,
      name: values.name,
      products: []
    };
    getGeolocation(shop)
      .then(
        res => {
          shop.location = res.data.results[0].geometry.location;
          tempShops.push(shop);
          dispatch({ type: ADD_SHOP, shops: tempShops });
        },
        err => {
          window.console.log(err);
        }
      )
      .catch(err => {
        window.console.error(err);
      })
  };
}