import React from "react";
import AppNav from "../AppNav/AppNav";
import CreateNavItem from '../AppNav/AppNavfix'
import { Carrousel } from "../Carrousel/Carrousel";
import { Footer } from "../Footer/Footer";
import { AboutUs } from "../AboutUs/AboutUs";

export const Home = () => {
  return (
    <div>
      <CreateNavItem />
      <AppNav />
      <Carrousel />
      <h2> Home Screen </h2>
      <AboutUs />
      <Footer />
    </div>
  );
};
