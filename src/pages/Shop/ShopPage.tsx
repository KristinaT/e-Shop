import React from 'react';
import { ShopData } from '../../staticData/ShopData';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

interface StateProps {
  collections: ShopData[];
}
interface OwnProps {}

type Props = StateProps & OwnProps;
const ShopPage: React.FC<Props> = () => (
  <div className='shop-page'>
    <CollectionsOverview />
  </div>
);

export default ShopPage;
