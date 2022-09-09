import React from "react";
import "./css/varios.css";

const DocentesListar = ({ docente }) => {
  const cursos = docente.cursos.map((dato) => {
    return <div key={dato._id}>{dato.curso}</div>;
  });

  return (
    <div className="individuo">
      <div className="check">
        <div className="etiquetas">Nombre: </div>
        <div className="datoDocente">{docente.nombre}</div>

        <div className="etiquetas">Email:</div>
        <div className="datoDocente">{docente.email}</div>

        <div className="etiquetas">Cursos:</div>
        <div className="datoDocente">{cursos} </div>
      </div>
    </div>
  );
};

export default DocentesListar;
