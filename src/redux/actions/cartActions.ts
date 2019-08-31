import CartActionTypes, { ActionWithPayload } from './types';
import { Action } from 'redux';

export type setAddItemAction = ActionWithPayload<
  typeof CartActionTypes.ADD_ITEM,
  any
>;

export const toggleCartHidden = (): Action => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: setAddItemAction) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
