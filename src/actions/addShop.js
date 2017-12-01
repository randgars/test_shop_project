import {
  ADD_SHOP
} from './const';

export default function addShop(shops, values) {
  return (dispatch) => {
    if (!shops) {
      return window.console.err('"shops" is undefined');
    }
    const tempShops = Object.assign([], shops);
    const shop = {
      id: +Math.random().toString().substr(2),
      address: values.address,
      mode: `${values.startTime}-${values.endTime}`,
      name: values.name,
      products: []
    };
    tempShops.push(shop);
    dispatch({ type: ADD_SHOP, shops: tempShops });
  };
}