import React from "react";
import "./skill.css";
export default function Skill() {
  return (
    <div className="cont_skill">
      <div className="row row_skill">
        <div className="col-md-2 col_Skill">
          <div className="caja_Skill"><i className="fab fa-html5 html"></i></div>
        </div>
        <div className="col-md-2 col_Skill">
          <div className="caja_Skill"><i className="fab fa-react react"></i></div>
        </div>
        <div className="col-md-2 col_Skill">
          <div className="caja_Skill"><i className="fab fa-js js"></i></div>
        </div>
        <div className="col-md-2 col_Skill">
          <div className="caja_Skill"><i className="fab fa-angular angular"></i></div>
        </div>
        <div className="col-md-2 col_Skill">
          <div className="caja_Skill"><i className="fab fa-python python"></i></div>
        </div>
        <div className="col-md-2 col_Skill">
          <div className="caja_Skill"><i className="fab fa-php php"></i></div>
        </div>
      </div> 
    </div>
  );
}
