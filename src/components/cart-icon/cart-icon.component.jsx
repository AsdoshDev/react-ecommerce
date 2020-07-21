import React from 'react';
import './cart-icon.styles.scss';
import { toggleCart } from './../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCart, itemCount }) => (
    < div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div >
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = ({ cart }) => ({
    itemCount: cart.cartItems.length
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);