import React from 'react';
import './checkout-item.styles.scss';
import { deleteItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';




const CheckoutItem = ({ cartItem, deleteItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => deleteItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);