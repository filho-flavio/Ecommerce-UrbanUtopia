import { createContext, useState } from "react";

export const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [isOpenCard, setIsOpenCard] = useState(false);

    const handleIsOpenCart = () => {
        setIsOpenCard(!isOpenCard);
    }

    return (
        <CartContext.Provider value={{handleIsOpenCart, isOpenCard}}>
            {children}
        </CartContext.Provider>
    )
}