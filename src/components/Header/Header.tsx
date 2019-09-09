import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { auth } from '../../firebase/Firebase';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import { selectCartHidden } from '../../redux/selectors/cartSelector';
import { selectCurrentUser } from '../../redux/selectors/userSelector';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from './HeaderStyles';

interface OwnProps {}

interface StateProps {
  currentUser: object | null;
  hidden: boolean;
}

interface DispatchProps {}

type Props = OwnProps & StateProps & DispatchProps;
const Header: React.FC<Props> = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);
