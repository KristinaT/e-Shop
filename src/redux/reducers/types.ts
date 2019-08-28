import { State as UserState } from './user/userReducer';

// The root Redux interface.
export interface RootState {
  user: UserState;
}
