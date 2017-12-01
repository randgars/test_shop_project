import {
  EDIT_PRODUCT
} from './const';

export default function editProduct(productId, shop, values, shops) {
  return (dispatch) => {
    if (!shops) {
      return window.console.err('"shops" is undefined');
    }
    let tempShops = Object.assign([], shops);
    const tempShop = Object.assign({}, shop);

    tempShop.products = tempShop.products.map(item => {
      if (item.id === productId) {
        item.name = values.name;
        item.description = values.description;
      }
      return item;
    })

    tempShops = tempShops.map(item => {
      if (item.id === tempShop.id) {
        item = tempShop;
      }
      return item;
    })

    dispatch({ type: EDIT_PRODUCT, shops: tempShops });
  };
}