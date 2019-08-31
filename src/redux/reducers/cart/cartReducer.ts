import { Reducer } from 'redux';
import CartActionTypes from '../../actions/types';
import { addItemToCart } from '../../utils/cartUtils';

export interface State {
  hidden: boolean;
  cartItems: any[];
}

const INITIAL_STATE: State = {
  hidden: true,
  cartItems: []
};

const cartReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
