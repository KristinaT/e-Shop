import React from 'react';
import './CheckoutItem.scss';
import { MapDispatchToProps, connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/actions/cartActions';
import CartItem from '../CartItem/CartItem';

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
  clearItemFromCart: (item: any) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const CheckoutItem: React.FC<Props> = ({ cartItem, clearItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
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
  clearItemFromCart
};
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
