import React, { useState } from "react";
import CartContext from "./CartContext";

function CartProvider(props){
    const [cartItems, setCartItems] = useState([]);
    const value = {
        cartItems,
        setCartItems
    };
    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;