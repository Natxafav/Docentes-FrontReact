import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";

const ListarCursos = ({ curso }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const idCurso = curso._id;

  const modificarCurso = async (camposPorCambiar) => {
    await axios
      .patch(URL + { idCurso }, camposPorCambiar)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="individuo">
      <input type={"checkbox"} id="cursocheckb" />
      <label className="navLabel" htmlFor="cursocheckb" />
      <div className="etiquetas">Curso: </div>
      <div className="datocurso">{curso.curso}</div>
      <div className="etiquetas">Aula: </div>
      <div className="datocurso">{curso.aula}</div>
      <div className="etiquetas">Docente:</div>
      <div className="datocurso">{curso.docente.nombre}</div>
      <div className="etiquetas">Opcion:</div>
      <div className="datocurso">{curso.opcion} </div>
      <div className="etiquetas">Precio:</div>
      <div className="datocurso">{curso.precio} </div>
      <div className="botones">
        <button className="button modificar" onClick={modificarCurso}>
          {<FaEdit />}
        </button>
        {/* <button className="button eliminar" onClick={eliminarCurso}>
          {<FaTrash />}
        </button> */}
      </div>
    </div>
  );
};

export default ListarCursos;
