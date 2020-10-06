import React from "react";
import AppNav from "../AppNav/AppNav";
import { Footer } from "../Footer/Footer";
import { Product} from "./ProductCard.js"

export const Store = () => {
  return (
    <div>
      <AppNav />      
      <h2> Store Screen </h2> 
      <Product/>    
      <Footer />
    </div>
  );
};
