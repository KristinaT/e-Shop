import { Reducer } from 'redux';
import ShopActionTypes from '../actions/shopActions';
import SHOP_DATA from '../../staticData/ShopData';

export interface State {
  collections: any;
  isFetching: boolean;
  errorMessage: string | undefined;
}
const INITIAL_STATE = {
  collections: SHOP_DATA,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
