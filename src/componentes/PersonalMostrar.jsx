import React from "react";
import "./css/varios.css";
const PersonalMostrar = ({ dato, changeLogin }) => {
  const docente = dato.cursos.map((dato) => {
    return (
      <div className="cursosDocente" key={dato._id}>
        {dato.curso}
      </div>
    );
  });
  changeLogin();
  return (
    <div className="docenteMostrar">
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
