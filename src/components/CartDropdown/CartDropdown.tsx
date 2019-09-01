import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/selectors/cartSelector';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/actions/cartActions';

interface OwnProps extends RouteComponentProps {}
interface StateProps {
  cartItems: any[];
}
interface DispatchProps {
  toggleCartHidden: (cart: any) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const CartDropdown: React.FC<Props> = ({
  cartItems,
  history,
  toggleCartHidden
}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden(true);
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  cartItems: selectCartItems(state)
});

const mapDispatchtoProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  toggleCartHidden
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchtoProps
  )(CartDropdown)
);
