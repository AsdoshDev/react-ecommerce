import React from 'react';
import './cart.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const Cart = ({ cartItems }) => (
    <div className="cart">
        <div className="cart-items">
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart);