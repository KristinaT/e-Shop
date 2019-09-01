import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';
import './CartIcon.scss';
import { RootState } from '../../redux/reducers/types';
import { selectCartItemsCount } from '../../redux/selectors/cartSelector';

interface StateProps {
  itemCount: number;
}

interface OwnProps {}

interface DispatchProps {
  toggleCartHidden: (hidden: any) => void;
}

type Props = DispatchProps & OwnProps & StateProps;

const CardIcon: React.FC<Props> = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  toggleCartHidden
};

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardIcon);
