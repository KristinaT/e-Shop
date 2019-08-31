import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import CartItem from '../CartItem/CartItem';

interface OwnProps {}
interface StateProps {
  cartItems: any[];
}
interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;

const CartDropdown: React.FC<Props> = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
