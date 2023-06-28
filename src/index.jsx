import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { SearchContextProvider } from "./infra/contexts/SearchContext";
import { ThemeContextProvider } from "./infra/contexts/ThemeContext";

import CartProvider from "./pages/Carrinho/CartContextProvider/CartProvider";

import "./styles/sublime-boostrap.scss";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <SearchContextProvider>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </SearchContextProvider>
  </ThemeContextProvider>
);
