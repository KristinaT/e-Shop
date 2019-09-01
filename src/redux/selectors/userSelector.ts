import { RootState } from '../reducers/types';

const selectCart = (state: RootState) => state.user;

export const selectCurrentUser = (state: RootState) =>
  selectCart(state).currentUser;
