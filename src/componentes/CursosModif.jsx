import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";
import { useState } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";

const CursosModif = ({ curso }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const idCurso = curso._id;

  const [nuevoCurso, setNuevoCurso] = useState(curso.curso);
  const [aula, setAula] = useState(curso.aula);
  const [opcion, setOpcion] = useState(curso.opcion);
  const [precio, setPrecio] = useState(curso.precio);

  const modificarCurso = async (e) => {
    await axios
      .patch(
        URL + { idCurso },
        {
          curso: nuevoCurso,
          aula: aula,
          docente: extraerDatosDeUsuario()[0],
          opcion: opcion,
          precio: precio,
        },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        }
      )
      .then((response) => {
        window.location.reload(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const gestorCurso = (e) => {
    setNuevoCurso(e.target.value);
  };
  const gestorAula = (e) => {
    setAula(e.target.value);
  };
  const gestorOpcion = (e) => {
    setOpcion(e.target.value);
  };
  const gestorPrecio = (e) => {
    setPrecio(e.target.value);
  };

  return (
    <div>
      <div className="modificarCurso">
        <input
          className="form-input login"
          type="text"
          name="curso"
          value={curso}
          onChange={gestorCurso}
          placeholder={curso.curso}
          minLength="5"
          required
        ></input>
        <input
          className="form-input login"
          type="text"
          name="aula"
          value={aula}
          onChange={gestorAula}
          placeholder={curso.aula}
          minLength="5"
          required
        ></input>
        <input
          className="form-input login"
          type="text"
          name="opcion"
          value={opcion}
          onChange={gestorOpcion}
          placeholder={curso.opcion}
          minLength="5"
          required
        ></input>
        <input
          className="form-input login"
          type="number"
          name="precio"
          value={precio}
          onChange={gestorPrecio}
          placeholder={curso.precio}
          minLength="5"
          required
        ></input>
        <button className="guardarModif" onClick={modificarCurso}>
          {<FaEdit />}
        </button>
      </div>
    </div>
  );
};

export default CursosModif;
