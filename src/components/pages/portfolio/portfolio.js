import React from "react";
import "./portfolio.css";
import kuppel from "./../../../assets/img/kuppel.jfif";
export default function Portfolio() {
  return (
    <div>
      <h1>Hi Portfolio</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card_portfolio">
            <a href="https://www.kuppel.co/" className="link">
              <img src={kuppel} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kuppel</h5>
                <p className="card-text">
                  Software de Facturacion para pequeñas y grandes empresas
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_portfolio">
            <a href="https://www.kuppel.co/" className="link">
              <img src={kuppel} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kuppel</h5>
                <p className="card-text">
                  Software de Facturacion para pequeñas y grandes empresas
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_portfolio">
            <a href="https://www.kuppel.co/" className="link">
              <img src={kuppel} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kuppel</h5>
                <p className="card-text">
                  Software de Facturacion para pequeñas y grandes empresas
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_portfolio">
            <a href="https://www.kuppel.co/" className="link">
              <img src={kuppel} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kuppel</h5>
                <p className="card-text">
                  Software de Facturacion para pequeñas y grandes empresas
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
