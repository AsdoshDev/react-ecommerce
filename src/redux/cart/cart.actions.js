

import CartActionTypes from './cart.types';

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART
})

export const addItem = cartItem => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
})

export const deleteItem = cartItem => ({
    type: CartActionTypes.DELETE_ITEM,
    payload: cartItem
})

export const removeItem = cartItem => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItem
})

