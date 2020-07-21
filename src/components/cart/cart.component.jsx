import React from 'react';
import './cart.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className="cart">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                    : <span className="empty-cart">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCart());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// here dispatch is accessible to us coz when we do not pass it as swecond param, we automatically have access to it.
export default withRouter(connect(mapStateToProps)(Cart));