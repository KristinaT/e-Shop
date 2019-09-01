import React from 'react';
import './CheckoutItem.scss';

interface OwnProps {
  cartItem: {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
}

interface StateProps {}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const CheckoutItem: React.FC<Props> = ({
  cartItem: { name, imageUrl, price, quantity }
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={imageUrl} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <span className='remove-button'>&#10005;</span>
  </div>
);

export default CheckoutItem;
