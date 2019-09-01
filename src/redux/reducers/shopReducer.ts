import { Reducer } from 'redux';
import SHOP_DATA from '../../staticData/ShopData';

export interface State {
  collections: any[];
}
const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer: Reducer<State> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
