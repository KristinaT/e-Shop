import { State as UserState } from './user/userReducer';
import { State as CartState } from './cart/cartReducer';

// The root Redux interface.
export interface RootState {
  user: UserState;
  cart: CartState;
}
