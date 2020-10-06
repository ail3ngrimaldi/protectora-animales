import React from "react";
import "./ProductCard.css"

export const Product = () => {
  return (
    <div class="ProductCard">
      <img class="card-img-top" src="/img/Store/120765367_3518034021582796_1995889094324200198_n.jpg" alt="Card image cap"></img>
      
      <div class="card-body">
        <h5 class="card-title">Camisetas</h5>
        <p class="card-text">¡¡¡Buenas bonitas y baratas!!! Con diseños variados</p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
    </div>
  );
};
