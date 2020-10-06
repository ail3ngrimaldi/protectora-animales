import React from "react";
import AppNav from "../AppNav/AppNav";
import { Footer } from "../Footer/Footer";
import { Product} from "./ProductCard.js"
import "./Store.css"

export const Store = () => {
  return (
    <div>
      <AppNav />      
      <h2> Store Screen </h2> 
      <div class="catalog">
        <Product/>    
      </div>
      <Footer />
    </div>
  );
};