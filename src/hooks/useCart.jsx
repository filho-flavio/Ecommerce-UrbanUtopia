import { useContext } from "react";
import { CartContext } from "../context/cardContext";

export const useCart = () => {
    const context = useContext(CartContext);

    return context;
}