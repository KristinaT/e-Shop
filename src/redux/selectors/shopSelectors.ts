import { RootState } from '../reducers/types';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = (state: RootState) =>
  selectShop(state).collections;
