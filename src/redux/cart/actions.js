import { ActionTypesCart } from "./action-types";

export const addToCart = (payload) => {
  return {
    type: ActionTypesCart.ADD_TO_CART,
    payload: payload,
  };
};