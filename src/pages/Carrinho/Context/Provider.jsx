import React, { useState } from "react";
import AppContext from "./CartContext";

function Provider(props){
    const [cartItems, setCartItems] = useState([]);
    const value = {
        cartItems,
        setCartItems
    };
    return (
        <AppContext.Provider value={value}>
            {props}
        </AppContext.Provider>
    );
}

export default Provider;