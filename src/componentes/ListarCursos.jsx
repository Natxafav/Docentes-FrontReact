import React from "react";
import "./css/varios.css";
import { useState } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import CursosModif from "./CursosModif";
import axios from "axios";

const ListarCursos = ({ curso }) => {
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/cursos/";
  const [userId, setUserId] = useState();
  const [checked, setChecked] = useState(false);

  const [cursoConcreto, setCursoConcreto] = useState({
    _id: null,
    curso: "",
    docente: extraerDatosDeUsuario()[0],
    opcion: "",
    aula: "",
  });

  const checkedChange = (e) => {
    setChecked(!checked);
    setUserId(e.target.value);
  };

  const getCursos = async () => {
    await axios
      .get(URL + userId, {
        headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
      })
      .then((datos) => {
        setCursoConcreto(datos.data.curso);
      })
      .catch((error) => {});
  };

  return (
    <div className="listaCursos">
      {checked ? <CursosModif cursoConcreto={cursoConcreto} /> : null}

      <div className="individuo">
        <div className="etiquetas">Curso: </div>
        <div className="datocurso">{curso.curso}</div>

        <div className="etiquetas">Aula: </div>
        <div className="datocurso">{curso.aula}</div>

        <div className="etiquetas">Docente:</div>
        <div className="datocurso">
          {curso.docente !== null ? (
            curso.docente.nombre
          ) : (
            <h4>No existe docente asignado</h4>
          )}
        </div>

        <div className="etiquetas">Opcion:</div>
        <div className="datocurso">{curso.opcion} </div>

        <div className="etiquetas">Precio:</div>
        <div className="datocurso">{curso.precio}</div>
        <div className="botones">
          <input
            type="checkbox"
            className="checked-cursos"
            value={curso._id}
            onClick={checkedChange}
          ></input>
          <button
            type="submit"
            className="botonModif curso"
            onClick={getCursos}
          >
            Buscar Datos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListarCursos;
