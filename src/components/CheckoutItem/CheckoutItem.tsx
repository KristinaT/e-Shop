import React from 'react';
import './CheckoutItem.scss';
import { MapDispatchToProps, connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/actions/cartActions';

interface OwnProps {
  cartItem: {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
}

interface StateProps {}
interface DispatchProps {
  addItem: (item: any) => void;
  removeItem: (item: any) => void;
  clearItemFromCart: (item: any) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const CheckoutItem: React.FC<Props> = ({
  cartItem,
  addItem,
  removeItem,
  clearItemFromCart
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'> {quantity} </span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  addItem,
  removeItem,
  clearItemFromCart
};
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
