import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";
import { useState } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";

const CursosModif = (cursoConcreto) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  // const { _id, curso, docente, opcion, aula } = cursoConcreto;
  console.log(cursoConcreto);
  // const [cursos, setCursos] = useState(curso);
  // const [aulas, setAulas] = useState(aula);
  // const [opciones, setOpciones] = useState(opcion);
  // const [precios, setPrecios] = useState(precio);

  // const navegar = useNavigate();

  // const modificarCurso = async (e) => {
  //   await axios
  //     .patch(
  //       URL,
  //       {
  //         curso: cursos,
  //         aula: aulas,
  //         docente: docente,
  //         opcion: opciones,
  //         precio: precios,
  //       },
  //       {
  //         headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // // const eliminarCurso = async () => {
  // //   await axios
  // //     .delete(URL + curso._id, {
  // //       headers: {
  // //         Authorization: "Bearer " + extraerDatosDeUsuario()[1], // En los headers van 'Bearer ' + token recibido
  // //       },
  // //     })
  // //     .then((response) => {})
  // //     .catch((error) => {
  // //       console.log(error.response.data);
  // //     });
  // //   navegar("/cursos");
  // // };
  // const gestorCurso = (e) => {
  //   setCursos(e.target.value);
  // };
  // const gestorOpcion = (e) => {
  //   setOpciones(e.target.value);
  // };
  // const gestorAula = (e) => {
  //   setAulas(e.target.value);
  // };
  // const gestorPrecio = (e) => {
  //   setPrecios(e.target.value);
  // };
  return (
    <div>
      {/* <div className="form-modif-curso"></div>
      <form action="#">
        <input
          type="text"
          value={cursos}
          placeholder="Modificar curso"
          onChange={gestorCurso}
        />
        <select onChange={gestorAula} name="aula" id="aula" value={aulas}>
          <option value="">Seleccione aula</option>
          <option value="Aula-1">Aula-1</option>
          <option value="Aula-2">Aula-2</option>
          <option value="Aula-3">Aula-3</option>
          <option value="Aula-4">Aula-4</option>
        </select>

        <select name="opcion" id="opcion" onChange={gestorOpcion}>
          <option value="">Seleccione asistencia</option>
          <option value="Virtual">Virtual</option>
          <option value="Semi-presencial">Semi-presencial</option>
          <option value="Presencial">Presencial</option>
        </select>

        <input
          onChange={gestorPrecio}
          type="text"
          value={precios}
          placeholder="Modificar precio"
        />

        <button className="guardarModif" onClick={modificarCurso}>
          {<FaEdit />}
        </button>
      </form> */}
    </div>
  );
};

export default CursosModif;
