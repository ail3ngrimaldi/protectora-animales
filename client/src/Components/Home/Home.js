import React from "react";
import AppNav from "../AppNav/AppNav";
import { Carrousel } from "../Carrousel/Carrousel";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div>
      <AppNav />

      <h2> Home Screen </h2>

      <Carrousel />
      <Footer />
    </div>
  );
};
