import CartActionTypes, {
  setAddItemAction,
  setClearItemFromCartAction,
  setRemoveItemAction
} from './types';
import { Action } from 'redux';

export const toggleCartHidden = (): Action => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: setAddItemAction) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: setRemoveItemAction) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: setClearItemFromCartAction) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
