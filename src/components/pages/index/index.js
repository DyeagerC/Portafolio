import React from 'react'
import "./index.css";
import image from "./../../../assets/img/dino.png";
import Hero from './../hero/Hero';
import Services from './../servicios/Services';
import Skill from './../skill/skill';
import Portfolio from './../portfolio/portfolio';
export default function Index() {
    return (
        <div className="cont_index">
            <Hero/>
            <Services/>
            <Skill/>
            <Portfolio/>
            
        </div>
    )
}
