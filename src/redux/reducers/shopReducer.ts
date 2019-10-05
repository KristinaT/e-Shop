import { Reducer } from 'redux';
import ShopActionTypes from '../actions/shopActions';
import SHOP_DATA from '../../staticData/ShopData';

export interface State {
  collections: any;
}
const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
