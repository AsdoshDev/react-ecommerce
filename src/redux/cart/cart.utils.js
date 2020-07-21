const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(item => cartItemToAdd.id === item.id);
    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    return cartItems.filter(item => item.id !== cartItemToDelete.id);
}

export default addItemToCart;
export { deleteItemFromCart };