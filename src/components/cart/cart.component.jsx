import React from 'react';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cart.actions';

import {
    CartContainer,
    CartItemsContainer,
    EmptyCart,
    CartCheckoutButton
} from './cart.styles';

const Cart = ({ cartItems, history, dispatch }) => (
    <CartContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                    : <EmptyCart>Your cart is empty</EmptyCart>
            }
        </CartItemsContainer>
        <CartCheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCart());
        }}>GO TO CHECKOUT</CartCheckoutButton>
    </CartContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// here dispatch is accessible to us coz when we do not pass it as second param, we automatically have access to it.
export default withRouter(connect(mapStateToProps)(Cart));