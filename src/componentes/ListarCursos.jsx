import React from "react";
import "./css/varios.css";

const ListarCursos = ({ curso }) => {
  return (
    <div className="individuo">
      <div className="indivData">
        <div className="etiquetas">Curso: </div>
        <div className="datocurso">{curso.curso}</div>
      </div>
      <div className="indivData">
        <div className="etiquetas">Aula: </div>
        <div className="datocurso">{curso.aula}</div>
      </div>
      {/* <div className="indivData">
        <div className="etiquetas">Docente:</div>
        <div className="datocurso">{curso.docente.nombre}</div>
      </div> */}
      <div className="indivData">
        <div className="etiquetas">Opcion:</div>
        <div className="datocurso">{curso.opcion} </div>
      </div>
      <div className="indivData">
        <div className="etiquetas">Precio:</div>
        <div className="datocurso">{curso.precio} </div>
      </div>
    </div>
  );
};

export default ListarCursos;
