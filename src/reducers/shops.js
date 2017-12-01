import {
  GET_SHOPS_SUCCESS,
  GET_SHOP_SUCCESS,
  ADD_SHOP,
  EDIT_SHOP,
  ADD_PRODUCT,
  EDIT_PRODUCT
} from '../actions/const';

const initialState = {
  shops: [],
  shop: null
};

export default function shops(state = initialState, action) {
  switch (action.type) {
    case GET_SHOPS_SUCCESS:
      return {...state, shops: action.shops};

    case GET_SHOP_SUCCESS:
      return {...state, shop: action.shop};

    case EDIT_SHOP:
      return {...state, shops: action.shops};

    case ADD_SHOP:
      return {...state, shops: action.shops};

    case ADD_PRODUCT:
      return {...state, shops: action.shops};

    case EDIT_PRODUCT:
      return {...state, shops: action.shops};

    default:
      return state;
  }
}
