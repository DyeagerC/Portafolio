import React from 'react'
import "./Hero.css";
import image from "./../../../assets/img/rat.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
    return (
        <div className="cont_hero">
            <div className="row">
                <div className="col-md-2 cont"></div>
                <div className="col-md-8 cont-text mx-auto">
                    <h1>Hi, I'm Daniel</h1>
                    <h2>and I work as a web developer,</h2>
                    <h3>nice to meet you :)</h3>
                </div>
                <div className="col-md-2 cont"></div>
            </div>
            <div className="cont_btn">
                <button className="btn_down"><FontAwesomeIcon icon={faAngleDown} /></button>
            </div>
            
        </div>
    )
}
