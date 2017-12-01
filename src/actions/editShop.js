import {
  EDIT_SHOP,
  ADD_PRODUCT
} from './const';

export default function editShop(shopId, values, shops) {
  return (dispatch) => {
    let tempShops = Object.assign([], shops);
    if (values.address) {
      tempShops = tempShops.map(item => {
        if (item.id === shopId) {
          item.name = values.name;
          item.address = values.address;
          item.mode = `${values.startTime}-${values.endTime}`;
        }
        return item;
      })
      dispatch({ type: EDIT_SHOP, shops: tempShops });
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