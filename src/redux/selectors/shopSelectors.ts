import { RootState } from '../reducers/types';
import { ShopData } from '../../staticData/ShopData';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = (state: RootState) =>
  selectShop(state).collections;

export type CollectionUrlParam =
  | 'hats'
  | 'sneakers'
  | 'jackets'
  | 'womens'
  | 'mens';

export const selectCollection = (collectionUrlParam: CollectionUrlParam) => (
  state: RootState
) => selectShop(state).collections[collectionUrlParam];
