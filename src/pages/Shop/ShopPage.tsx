import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ShopData } from '../../staticData/ShopData';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/Firebase';
import { MapStateToProps, connect, MapDispatchToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import { updateCollections } from '../../redux/actions/shopActions';

interface StateProps {}
interface OwnProps extends RouteComponentProps {}
interface DispatchProps {
  updateCollections: (collectionsMap: any) => void;
}

type Props = StateProps & OwnProps & DispatchProps;
class ShopPage extends React.Component<Props> {
  unsubscribefromSnapshot: { (): void } | null = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribefromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        ></Route>
      </div>
    );
  }
}
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  updateCollections: collectionsMap => updateCollections(collectionsMap)
};
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
