import {
  EDIT_SHOP,
  ADD_PRODUCT
} from './const';

import getGeolocation from '../sources/getGeolocation';

export default function editShop(shop, values, shops) {
  return (dispatch) => {
    let tempShops = Object.assign([], shops);
    const tempShop = Object.assign({}, shop);
    if (values.address) {
      tempShop.name = values.name;
      tempShop.address = `${values.city}, ${values.address}`;
      tempShop.mode = `${values.startTime}-${values.endTime}`;
      getGeolocation(tempShop)
      .then(
        res => {
          tempShop.location = res.data.results[0].geometry.location;
          tempShops = tempShops.map(item => {
            if (item.id === tempShop.id) {
              item = tempShop;
            }
            return item;
          })
          dispatch({ type: EDIT_SHOP, shops: tempShops });
        },
        err => {
          window.console.log(err);
        }
      )
      .catch(err => {
        window.console.error(err);
      });
    } else {
      tempShops = tempShops.map(item => {
        if (item.id === shopId) {
          item.products.push({
            id: +Math.random().toString().substr(2),
            name: values.name,
            description: values.description
          })
        }
        return item;
      })
      dispatch({ type: ADD_PRODUCT, shops: tempShops });
    }
  };
}