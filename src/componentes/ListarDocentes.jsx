import React from "react";
import "./varios.css";

const ListarDocentes = ({ docente }) => {
  const cursos = docente.cursos.map((dato) => {
    return <div>{dato.curso}</div>;
  });

  return (
    <div className="individuo">
      <div className="indivData">
        <div className="etiquetas">Nombre: </div>
        <div className="datoDocente">{docente.nombre}</div>
      </div>
      <div className="indivData">
        <div className="etiquetas">Email:</div>
        <div className="datoDocente">{docente.email}</div>
      </div>
      <div className="indivData">
        <div className="etiquetas">Cursos:</div>
        <div className="datoDocente">{cursos} </div>
      </div>
    </div>
  );
};

export default ListarDocentes;
