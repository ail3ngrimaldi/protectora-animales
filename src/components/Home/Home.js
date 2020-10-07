import React from "react";
import CreateNavItem from '../AppNav/AppNavfix';
import { Carrousel } from "../Carrousel/Carrousel";
import { Footer } from "../Footer/Footer";
import { AboutUs } from "../AboutUs/AboutUs";


export const Home = () => {
  return (
    <div>
      <CreateNavItem />
      <Carrousel />
      <h2> Home Screen </h2>
      <AboutUs />
      <Footer />
    </div>
  );
};
