import React from "react";
import "./index.css";
import image from "./../../../assets/img/dino.png";
import Hero from "./../hero/Hero";
import Services from "./../servicios/Services";
import About from "./../aboutme/about";
import Portfolio from "./../portfolio/portfolio";
export default function Index() {
  return (
    <div className="cont_index">
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}
