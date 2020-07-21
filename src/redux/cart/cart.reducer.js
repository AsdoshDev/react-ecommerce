import CartActionTypes from './cart.types';
import addItemToCart from './cart.utils';
import { deleteItemFromCart } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DELETE_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;