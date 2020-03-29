import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';
import { MapStateToProps, connect, MapDispatchToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import ShopActionTypes, {
  fetchCollectionsStartAsync
} from '../../redux/actions/shopActions';
import { selectIsCollectionFetching } from '../../redux/selectors/shopSelectors';

interface StateProps {
  isCollectionFetching: boolean;
}
interface OwnProps extends RouteComponentProps {}
interface DispatchProps {
  fetchCollectionsStartAsync: () => (dispatch: any) => void;
}

type Props = StateProps & OwnProps & DispatchProps;
class ShopPage extends React.Component<Props> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching } = this.props;

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
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: any
) => ({
  fetchCollectionsStartAsync: () => {
    const action = fetchCollectionsStartAsync();
    return dispatch(action);
  }
});

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  isCollectionFetching: selectIsCollectionFetching(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
