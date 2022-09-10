import React from "react";
import "./css/formularios.css";
import Buscar from "./Buscar";

const Inicio = () => {
  return (
    <div className="welcome">
      <div className="mensaje">
        <div className="buscarInicio">
          <Buscar />
        </div>
        Necesitas loguearte o registrarte para acceder.
      </div>
    </div>
  );
};

export default Inicio;
