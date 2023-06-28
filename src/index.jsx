import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ThemeContextProvider } from "./infra/contexts/ThemeContext";
import { SearchContextProvider } from "./infra/contexts/SearchContext";
import { CartContextProvider } from "./infra/contexts/CartContext";

import "./styles/sublime-boostrap.scss";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <SearchContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </SearchContextProvider>
  </ThemeContextProvider>
);
