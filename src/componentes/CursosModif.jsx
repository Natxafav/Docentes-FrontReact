import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";
import { useState } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";

const CursosModif = ({ cursoConcreto }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const { _id, curso, docente, opcion, aula, precio } = cursoConcreto;
  console.log(cursoConcreto);
  const [cursos, setCursos] = useState(cursoConcreto.curso);
  const [aulas, setAulas] = useState(cursoConcreto.aula);
  const [opciones, setOpciones] = useState(cursoConcreto.opcion);
  const [precios, setPrecios] = useState(cursoConcreto.precio);
  const id = cursoConcreto._id;
  const navegar = useNavigate();
  console.log(id);
  const modificarCurso = async (e) => {
    await axios
      .patch(
        URL + id,
        {
          curso: cursos,
          aula: aulas,

          opcion: opciones,
          precio: precios,
        },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const eliminarCurso = async () => {
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
  };
  const gestorCurso = (e) => {
    setCursos(e.target.value);
  };
  const gestorOpcion = (e) => {
    setOpciones(e.target.value);
  };
  const gestorAula = (e) => {
    setAulas(e.target.value);
  };
  const gestorPrecio = (e) => {
    setPrecios(e.target.value);
  };
  return (
    <div>
      <div className="form-modif-curso">
        <form action="#" className="form-modif curso">
          <input
            type="text"
            value={cursos}
            placeholder={cursoConcreto.curso}
            onChange={gestorCurso}
          />
          <select onChange={gestorAula} name="aula" id="aula" value={aulas}>
            <option value="">{cursoConcreto.aula}</option>
            <option value="Aula-1">Aula-1</option>
            <option value="Aula-2">Aula-2</option>
            <option value="Aula-3">Aula-3</option>
            <option value="Aula-4">Aula-4</option>
          </select>

          <select name="opcion" id="opcion" onChange={gestorOpcion}>
            <option value="">{cursoConcreto.opcion}</option>
            <option value="Virtual">Virtual</option>
            <option value="Semi-presencial">Semi-presencial</option>
            <option value="Presencial">Presencial</option>
          </select>

          <input
            onChange={gestorPrecio}
            type="text"
            value={precios}
            placeholder={cursoConcreto.precio}
          />
          <div>
            <button className="cursoModif modif" onClick={modificarCurso}>
              {<FaEdit className="faedit" />}
            </button>
            <button className="cursoModif elim" onClick={eliminarCurso}>
              {<FaTrash className="fatrash" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursosModif;
