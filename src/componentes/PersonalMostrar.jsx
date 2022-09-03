import React from "react";
import "./css/varios.css";
const PersonalMostrar = ({ dato }) => {
  const docente = dato.cursos.map((dato) => {
    return <div>{dato.curso}</div>;
  });

  return (
    <div className="docente">
      <div className="docenteData">
        <div className="docenteEtiqueta">Nombre: </div>
        <div className="docenteDato">{dato.nombre}</div>
      </div>
      <div className="docenteData">
        <div className="docenteEtiqueta">Email:</div>
        <div className="docenteDato">{dato.email}</div>
      </div>
      <div className="docenteData">
        <div className="docenteEtiqueta">Cursos:</div>
        <div className="docenteDatoCurso">{docente} </div>
      </div>
    </div>
  );
};

export default PersonalMostrar;
