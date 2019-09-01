import { State as UserState } from './user/userReducer';
import { State as CartState } from './cart/cartReducer';
import { State as DirectoryState } from './directoryReducer';
import { State as ShopState } from './shopReducer';

// The root Redux interface.
export interface RootState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}
