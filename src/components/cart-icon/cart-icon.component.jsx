import React from 'react';
import { toggleCart } from './../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCart, itemCount }) => (
    <CartIconContainer onClick={toggleCart}>
        <ShoppingIconContainer />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer >
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);