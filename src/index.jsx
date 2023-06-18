import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { SearchContextProvider } from "./infra/contexts/SearchContext";

import "./styles/index.css";

import "./styles/sublime-boostrap.scss";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchContextProvider>
);
