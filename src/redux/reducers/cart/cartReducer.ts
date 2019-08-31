import { Reducer } from 'redux';
import { TOGGLE_CART_HIDDEN } from '../../actions/cartActions';

export interface State {
  hidden: boolean;
}

const INITIAL_STATE: State = {
  hidden: true
};

const cartReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
