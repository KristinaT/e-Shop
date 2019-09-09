import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ShopData } from '../../staticData/ShopData';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';

interface StateProps {
  collections: ShopData[];
}
interface OwnProps extends RouteComponentProps {}

type Props = StateProps & OwnProps;
const ShopPage: React.FC<Props> = ({ match }) => {
  console.log(match, ' path');
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
