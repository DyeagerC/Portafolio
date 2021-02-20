import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  
  const ShowMenu = () => {
    const nav_items = document.querySelector(".nav-menu");
    console.log(nav_items.classList.toggle("show"));
  };


  return (
    <div className="contenedor">
     
      <nav className="navbar">
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
      </nav>
    </div>
  );
}
