import { Action } from 'redux';

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM'
};

export default CartActionTypes;
