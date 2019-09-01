import { Action } from 'redux';

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
};

export type setAddItemAction = ActionWithPayload<
  typeof CartActionTypes.ADD_ITEM,
  any
>;

export type setClearItemFromCartAction = ActionWithPayload<
  typeof CartActionTypes.CLEAR_ITEM_FROM_CART,
  any
>;

export default CartActionTypes;
