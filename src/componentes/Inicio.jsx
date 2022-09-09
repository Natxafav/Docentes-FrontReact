import React from "react";
import "./css/formularios.css";
import Buscar from "./Buscar";

const Inicio = () => {
  return (
    <div className="welcome">
      <Buscar />
      <div className="mensaje">
        Necesitas loguearte o registrarte para acceder.
      </div>
    </div>
  );
};

export default Inicio;
