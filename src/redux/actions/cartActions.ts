import { ActionWithPayload } from '../types';

export const TOGGLE_CART_HIDDEN = ' TOGGLE_CART_HIDDEN';

export type setToggleCartHidden = ActionWithPayload<
  typeof TOGGLE_CART_HIDDEN,
  boolean
>;

export const toggleCartHidden = (hidden: boolean) => ({
  type: TOGGLE_CART_HIDDEN,
  payload: hidden
});
