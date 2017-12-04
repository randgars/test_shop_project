import {
  EDIT_SERIAL_NUMBER
} from './const';

export default function editSerialNumber(shops, elements) {
  return (dispatch) => {
    if (!shops) {
      return window.console.err('"shops" is undefined');
    }
    const tempShops = Object.assign([], shops);
    const tempArray = [];
    for (let i = 0; i < tempShops.length; i++) {
      for (let j = 0; j < elements.length; j++) {
        if (tempShops[i].id === elements[j].id) {
          tempShops[i].serial_number = elements[j].serial_number + 1;
          tempArray[elements[j].serial_number] = tempShops[i];
        }
      }
    }
    dispatch({ type: EDIT_SERIAL_NUMBER, shops: tempArray });
  };
}