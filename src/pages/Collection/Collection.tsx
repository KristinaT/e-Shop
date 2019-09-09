import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Collection.scss';
import {
  CollectionUrlParam,
  selectCollection
} from '../../redux/selectors/shopSelectors';
import { MapStateToProps, connect } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

interface OwnProps
  extends RouteComponentProps<{
    collectionId: CollectionUrlParam;
  }> {}
interface StateProps {
  collection: any;
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const CollectionPage: React.FC<Props> = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = (
  state: RootState,
  ownProps: OwnProps
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
