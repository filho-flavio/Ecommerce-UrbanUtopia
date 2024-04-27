import { ActionTypesCart } from "./action-types";

const initialState = {
    cartItems: [
        {}
    ]
}

const cartReducer = (state = initialState, action) => {
    switch(action) {
        case ActionTypesCart.ADD_TO_CART:
            return {...state, action}
    }
} 

export default cartReducer;