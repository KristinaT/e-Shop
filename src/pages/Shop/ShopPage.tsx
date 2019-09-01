import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { ShopData } from '../../staticData/ShopData';
import { MapStateToProps, connect } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import { selectShopCollections } from '../../redux/selectors/shopSelectors';

interface StateProps {
  collections: ShopData[];
}
interface OwnProps {}

type Props = StateProps & OwnProps;
const ShopPage: React.FC<Props> = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  collections: selectShopCollections(state)
});

export default connect(mapStateToProps)(ShopPage);
