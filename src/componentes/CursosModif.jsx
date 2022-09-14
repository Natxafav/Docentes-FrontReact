import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";

const CursosModif = ({ cursoConcreto, changeLogin }) => {
  const navegar = useNavigate();
  const id = cursoConcreto._id;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/cursos/";
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  console.log("Curso Concreto", cursoConcreto);
  const [cursos, setCursos] = useState(cursoConcreto.curso);
  const [aulas, setAulas] = useState(cursoConcreto.aula);
  const [opciones, setOpciones] = useState(cursoConcreto.opcion);
  const [precios, setPrecios] = useState(cursoConcreto.precio);
  changeLogin();
  const modificarCurso = async (e) => {
    e.preventDefault();
    await axios
      .patch(
        URL + cursoConcreto._id,
        {
          curso: cursos,
          docente: extraerDatosDeUsuario()[0],
          opcion: opciones,
          aula: aulas,
          precio: precios,
        },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        }
      )
      .then((response) => {})
      .catch((error) => {});
    navegar("/cursos");
    window.location.reload();
  };

  useEffect(() => {
    setAulas(cursoConcreto.aula);
    setCursos(cursoConcreto.curso);
    setOpciones(cursoConcreto.opcion);
    setPrecios(cursoConcreto.precio);
  }, [cursoConcreto]);

  const eliminarCurso = async (e) => {
    e.preventDefault();
    await axios
      .delete(URL + id, {
        headers: {
          Authorization: "Bearer " + extraerDatosDeUsuario()[1], // En los headers van 'Bearer ' + token recibido
        },
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error.response.data);
      });
    navegar("/cursos");
    window.location.reload();
  };

  const gestorCurso = (e) => {
    setCursos(e.target.value);
  };

  const gestorAula = (e) => {
    setAulas(e.target.value);
  };

  const gestorOpcion = (e) => {
    setOpciones(e.target.value);
  };
  const gestorPrecio = (e) => {
    setPrecios(e.target.value);
  };
  return (
    <div className="form-cursosmod">
      <div className="form-modif-curso">
        <form
          action="#"
          className="form-modif curso"
          onSubmit={modificarCurso}
          onReset={eliminarCurso}
        >
          <input
            className="nombreCursoModif"
            onChange={gestorCurso}
            type="text"
            value={cursos}
            placeholder={cursoConcreto.curso}
          />

          <select
            className="aulaCursoModif"
            onChange={gestorAula}
            name="aula"
            id="aula"
            placeholder={cursoConcreto.aula}
          >
            <option value={aulas}>{cursoConcreto.aula}</option>
            <option value="Aula-1">Aula-1</option>
            <option value="Aula-2">Aula-2</option>
            <option value="Aula-3">Aula-3</option>
            <option value="Aula-4">Aula-4</option>
          </select>

          <select
            className="opcionCursoModif"
            onChange={gestorOpcion}
            name="opcion"
            id="opcion"
            placeholder={cursoConcreto.opcion}
          >
            <option value={opciones}>{cursoConcreto.opcion}</option>
            <option value="Virtual">Virtual</option>
            <option value="Semi-presencial">Semi-presencial</option>
            <option value="Presencial">Presencial</option>
          </select>

          <input
            className="precioCursoModif"
            onChange={gestorPrecio}
            type="number"
            value={precios}
            placeholder={cursoConcreto.precio}
          />
          <div className="cont BotonModif">
            <button
              type="submit"
              className="botonModif modif"
              // onClick={modificarCurso}
            >
              {<FaEdit className="imgBoton" />}
            </button>
            <button
              type="reset"
              className="botonModif eliminar"
              // onClick={eliminarCurso}
            >
              {<FaTrash className="imgBoton" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursosModif;
