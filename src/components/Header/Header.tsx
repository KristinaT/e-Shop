import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase';
import { connect, MapStateToProps } from 'react-redux';
import './Header.scss';
import { RootState } from '../../redux/reducers/types';

interface OwnProps {}

interface StateProps {
  currentUser: object | null;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;
const Header: React.FC<Props> = ({ currentUser }) => (
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
    </div>
  </div>
);

// const mapStateToProps = (state: { user: { currentUser: StateProps } }) => ({
//   currentUser: state.user.currentUser
// });

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
