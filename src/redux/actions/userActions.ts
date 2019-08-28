import { ActionWithPayload } from '../types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export type SetCurrentUserAction = ActionWithPayload<
  typeof SET_CURRENT_USER,
  object | null
>;

export const setCurrentUser = (user: object | null): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: user
});
