import React from "react";
import me from "./../../../assets/img/people.jpg";
import "./about.css";

export default function About() {
  return (
    <div className="cont_aboutme">
      <div className="row">
        <div className="col-md-6 left_aboutme">
          <img className="img_about" src={me} />
        </div>
        <div className="col-md-6 rigth_aboutme">
          <span className="title_boute">Aboutme</span>
          <div className="cont_texto_about">
            <span className="texto">
              Colombiano apasionado por el aprendizaje y la programacion
            </span>
          </div>
          <div className="cont_icon">
            <div className="caja_Skill">
              <i className="fab fa-html5 html"></i>
            </div>

            <div className="caja_Skill">
              <i className="fab fa-react react"></i>
            </div>

            <div className="caja_Skill">
              <i className="fab fa-js js"></i>
            </div>
            <div className="caja_Skill">
              <i className="fab fa-angular angular"></i>
            </div>
            <div className="caja_Skill">
              <i className="fab fa-python python"></i>
            </div>

            <div className="caja_Skill">
              <i className="fab fa-php php"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
