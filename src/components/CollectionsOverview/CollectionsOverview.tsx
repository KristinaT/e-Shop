import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { MapStateToProps, connect } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import { selectShopCollections } from '../../redux/selectors/shopSelectors';
import { ShopData } from '../../staticData/ShopData';

interface OwnProps {}
interface StateProps {
  collections: ShopData[];
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const CollectionsOverview: React.FC<Props> = ({ collections }) => (
  <div className='collections-overview'>
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

export default connect(mapStateToProps)(CollectionsOverview);
