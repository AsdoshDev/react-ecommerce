import React from 'react';
import { Name, ItemDetails, CartItemContainer, Image } from './cart-item.styles';


const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
    <CartItemContainer>
        <Image alt='item' src={imageUrl} />
        <ItemDetails>
            <Name>{name}</Name>
            <span>{quantity}  x {price}</span>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;