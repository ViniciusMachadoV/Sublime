import { createContext } from "react";
import ProductCard from "../../../components/commons/ProductCard/ProductCard";

const CartContext = createContext();

const data = ProductCard()

export default CartContext;