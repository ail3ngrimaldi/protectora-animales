import React from "react";
import AppNav from "../AppNav/AppNav";
import { Carrousel } from "../Carrousel/Carrousel";
import { AboutUs } from "../AboutUs/AboutUs";

export const Home = () => {
  return (
    <div>
      <AppNav />
      <h2> Home Screen </h2>
      <Carrousel />
      <AboutUs />
    </div>
  );
};
