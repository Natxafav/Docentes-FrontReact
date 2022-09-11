import React from "react";
import "./css/formularios.css";

const BuscarResp = ({ dato }) => {
  return (
    <div className="slider">
      <div className="pintar mapeoBuscarResp">
        <div>
          {" "}
          <h4>Curso:</h4>
          {"  "}
          <h4>{dato.curso}</h4>
        </div>
        <div>
          <h4>Docente:</h4>
          {"  "}
          {dato.docente !== null ? (
            <h4>{dato.docente.nombre} </h4>
          ) : (
            <h4>No Asignado </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuscarResp;
