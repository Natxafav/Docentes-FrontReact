import React from "react";
import "./css/varios.css";
const PersonalMostrar = ({ dato }) => {
  const docente = dato.cursos.map((dato) => {
    return <div>{dato.curso}</div>;
  });

  return (
    <div className="docente">
      <div className="etiquetas">Nombre: </div>
      <div className="datoDocente personal">{dato.nombre}</div>

      <div className="etiquetas">Email:</div>
      <div className="datoDocente personal">{dato.email}</div>

      <div className="etiquetas">Cursos:</div>
      <div className="datoDocente personal">{docente} </div>
    </div>
  );
};

export default PersonalMostrar;
