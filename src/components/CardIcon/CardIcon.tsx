import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect, MapDispatchToProps } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import './CardIcon.scss';

interface OwnProps {}

interface DispatchProps {
  toggleCartHidden: (hidden: any) => void;
}

type Props = DispatchProps & OwnProps;

const CardIcon: React.FC<Props> = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  toggleCartHidden
};
export default connect(
  null,
  mapDispatchToProps
)(CardIcon);
