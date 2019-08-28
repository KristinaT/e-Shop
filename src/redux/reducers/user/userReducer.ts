import { Reducer } from 'redux';
import { SET_CURRENT_USER } from '../../actions/userActions';

export interface State {
  currentUser: object | null;
}

const INITIAL_STATE: State = {
  currentUser: null
};

const userReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
