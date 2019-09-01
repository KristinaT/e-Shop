import { RootState } from '../reducers/types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState) =>
  selectCart(state).cartItems;

export const selectCartHidden = (state: RootState) => selectCart(state).hidden;

export const selectCarTotal = (state: RootState) =>
  selectCart(state).cartItems.reduce(
    (accumulatedQuantity, cartitem) =>
      accumulatedQuantity + cartitem.quantity * cartitem.price,
    0
  );

export const selectCartItemsCount = (state: RootState) =>
  selectCart(state).cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );
