import React from 'react';
import { deleteItem, addItem, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity,
    RemoveButton,
    TextContainer

} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, addItem, removeItem, deleteItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt="item" src={imageUrl}></img>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <Quantity>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </Quantity>
            <TextContainer>{price}</TextContainer>
            <RemoveButton onClick={() => deleteItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);