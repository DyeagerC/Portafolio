import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  
  const ShowMenu = () => {
    const nav_items = document.querySelector(".nav_menu");
    nav_items.classList.toggle("show");
  };


  return (
    <div className="cont_menu">
      <div className="row row_menu">
        <div className="col-md-12 menu_letra">
          <div className="cont_nav_i" onClick={ShowMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <nav className="nav_menu">
            <ul className="ul_menu">
              <li className="li_nav">Home</li>
              <li className="li_nav">About</li>
              <li className="li_nav">Services</li>
              <li className="li_nav">Portfolio</li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WebDaniel
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/"  className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/servicios"
                className="nav-links"
                
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/proyectos"
                className="nav-links"
                
              >
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portafolio"
                className="nav-links"
                
              >
                Portafolio
              </Link>
            </li>
          </ul>
        </div>
        <span className="btn-menu" onClick={ShowMenu}>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </nav> */}
    </div>
  );
}
