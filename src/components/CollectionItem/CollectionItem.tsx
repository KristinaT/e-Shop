import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CollectionItem.scss';
import { MapDispatchToProps, connect, DispatchProp } from 'react-redux';
import { addItem } from '../../redux/actions/cartActions';

interface OwnProps {
  item: any;
}
interface DispatchProps {
  addItem: (item: any) => void;
}

type Props = OwnProps & DispatchProps;

const CollectionItem: React.FC<Props> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl}  )`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  addItem
};
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
