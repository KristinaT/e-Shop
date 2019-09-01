import React from 'react';
import './CartCheckout.scss';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import {
  selectCartItems,
  selectCarTotal
} from '../../redux/selectors/cartSelector';
import CheckoutItem from '../CheckoutItem/CheckoutItem';

interface OwnProps {}
interface StateProps {
  cartItems: any[];
  total: number;
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const CartCheckout: React.FC<Props> = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>
      <span> TOTAL: ${total}</span>
    </div>
  </div>
);
const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  cartItems: selectCartItems(state),
  total: selectCarTotal(state)
});
export default connect(mapStateToProps)(CartCheckout);
