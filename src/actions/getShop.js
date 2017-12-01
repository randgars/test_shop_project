import {
  GET_SHOP_SUCCESS, GET_SHOP_FAILURE
} from './const';

export default function getShop(shops, shopId) {
  return (dispatch) => {
    if (!shops || shops.length === 0) {
      return dispatch({ type: GET_SHOP_FAILURE });
    }
    const tempShops = Object.assign([], shops);
    let shop;
    tempShops.forEach((item) => {
      if (shopId === item.id) {
        shop = item;
      }
    });
    if (shop) {
      dispatch({ type: GET_SHOP_SUCCESS, shop: shop });
    } else {
      dispatch({ type: GET_SHOP_FAILURE });
    }
  };
}