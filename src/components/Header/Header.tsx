import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { auth } from '../../firebase/Firebase';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import './Header.scss';

interface OwnProps {}

interface StateProps {
  currentUser: object | null;
  hidden: boolean;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;
const Header: React.FC<Props> = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to='/signin' className='option'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
