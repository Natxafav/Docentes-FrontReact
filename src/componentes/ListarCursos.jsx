import React from "react";
import { FaEdit, FaObjectGroup, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import CursosModif from "./CursosModif";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const ListarCursos = ({ curso }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const [userId, setUserId] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [cursoConcreto, setCursoConcreto] = useState({
    _id: null,
    curso: "",
    docente: extraerDatosDeUsuario()[0],
    opcion: "",
    aula: "",
  });

  const navegar = useNavigate();
  const checkedChange = (e) => {
    setIsChecked(!isChecked);
    setUserId(e.target.value);
  };
  console.log(isChecked);
  const date = new Date();

  console.log("dato " + date + " fuera de ontenerIdCurso  " + userId);

  const goTo = () => {
    navegar("/cursos/modificar");
  };

  const getCursos = async () => {
    await axios
      .get(URL + userId, {
        headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
      })
      .then((datos) => {
        setCursoConcreto(datos.data.curso);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log(cursoConcreto);
  return (
    <div className="listaCursos">
      {isChecked ? <CursosModif cursoConcreto={cursoConcreto} /> : null}
      <div className="individuo">
        <div className="etiquetas">Curso: </div>
        <div className="datocurso">{curso.curso}</div>

        <div className="etiquetas">Aula: </div>
        <div className="datocurso">{curso.aula}</div>

        <div className="etiquetas">Docente:</div>
        <div className="datocurso">{curso.docente.nombre}</div>

        <div className="etiquetas">Opcion:</div>
        <div className="datocurso">{curso.opcion} </div>

        <div className="etiquetas">Precio:</div>
        <div className="datocurso">{curso.precio}</div>
        <div className="botones">
          <input
            type="checkbox"
            className="checked-cursos"
            value={curso._id}
            checked={isChecked}
            onClick={checkedChange}
          ></input>
          <button className="button modificar" onClick={getCursos}></button>
          <button className="button eliminar">{<FaTrash />}</button>
        </div>
      </div>
    </div>
  );
};

export default ListarCursos;
