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

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    let toBeRemovedIndex = cartItems.findIndex(item => item.id === cartItemToRemove.id);
    let toBeRemoved = cartItems[toBeRemovedIndex];
    if (toBeRemoved.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
}

export default addItemToCart;
export { deleteItemFromCart };
export { removeItemFromCart };