import { Reducer } from 'redux';
import CartActionTypes from '../../actions/types';
import { addItemToCart, removeItemFromCart } from '../../utils/cartUtils';
import CartItem from '../../../components/CartItem/CartItem';

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
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
