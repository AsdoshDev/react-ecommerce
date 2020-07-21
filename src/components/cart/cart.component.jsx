import React from 'react';
import './cart.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import { connect } from 'react-redux';

const Cart = cartItems => (
    <div className="cart">
        <div className="cart-items">
            {
                cartItems && cartItems.length > 0
                    ?
                    cartItems.map(item => (
                        <div className="cart-item">
                            <img alt='' src={item.imageUrl} />
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                    ))
                    :
                    null
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(Cart);