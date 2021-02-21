import React from "react";
import "./Tarjet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
export default function Tarjet() {
  // Diseño web, mantenimiento de aplicaciones, creacion de aplicaciones en la nube
  // Administracion base de datos, integracion con diferentes aplicaiones, asesoramiento tecnologico
  return (
    <div className="content_tarjet">
      <div className="row row_tarjet">
        <div className="col-md-4 ">
          <div>
            <div className="card">
              <div className="cont_img">
                <FontAwesomeIcon className="card-img-top" icon={faDesktop} size="2x"/>
              </div>

              <div className="card-body">
                <h5 className="card-title card-title-terjet ">Diseño</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="cont_img">
                <FontAwesomeIcon className="card-img-top" icon={faDesktop} size="2x"  />
              </div>
              <div className="card-body">
                <h5 className="card-title card-title-terjet ">Administracion</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card">
            <div className="cont_img">
              <FontAwesomeIcon className="card-img-top" icon={faDesktop} size="2x" />
            </div>
            <div className="card-body">
              <h5 className="card-title card-title-terjet ">Desarrollo</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cont_img">
              <FontAwesomeIcon className="card-img-top" icon={faDesktop} size="2x" />
            </div>
            <div className="card-body">
              <h5 className="card-title card-title-terjet ">Bases de Datos</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card">
            <div className="cont_img">
              <FontAwesomeIcon className="card-img-top" icon={faDesktop} size="2x" />
            </div>
            <div className="card-body">
              <h5 className="card-title card-title-terjet ">Integraciones</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="cont_img">
              <FontAwesomeIcon className="card-img-top" icon={faDesktop} size="2x" />
            </div>
            <div className="card-body">
              <h5 className="card-title card-title-terjet ">Asesoramiento</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
