import React from 'react';
import './cart.styles.scss';
import CustomButton from './../custom-button/custom-button.component';


const Cart = () => (
    <div className="cart">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default Cart;