import React from "react";
import { Footer } from "../Footer/Footer";
import { Product} from "./ProductCard.js"
import "./Store.css"

export const Store = () => {
  return (
    <div> 
      <div class="catalog">
        <Product/>    
      </div>
    </div>
  );
};