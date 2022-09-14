import React from "react";
import "./css/formularios.css";
import Buscar from "./Buscar";

const Inicio = () => {
  return (
    <div className="welcome">
      <div className="pantallaInicio">
        <div className="buscarInicio">
          <Buscar />
        </div>
      </div>
      <div>
        <h4 className="mensaje-inicio">
          {" "}
          Necesitas loguearte o registrarte para acceder.
        </h4>
      </div>
    </div>
  );
};

export default Inicio;
