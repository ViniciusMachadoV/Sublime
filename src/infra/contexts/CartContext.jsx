import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCard(product) {
    if (!product) return;

    setCartItems((cartItems) => {
      return [...cartItems, { ...product, quantity: 1 }];
    });
  }

  const value = {
    cartItems,
    addToCard,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}
