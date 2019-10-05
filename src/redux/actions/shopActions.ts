const ShopActionTypes = {
  UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
};

export const updateCollections = (collectionsMap: any) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});

export default ShopActionTypes;
