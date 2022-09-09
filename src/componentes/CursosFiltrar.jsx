import React from "react";

import axios from "axios";

import { extraerDatosDeUsuario } from "./Funcionalidad";

const CursosFiltrar = () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;

  const filtrar = async (idCursos) => {
    await axios
      .get(URL + { idCursos }, {
        headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
      })
      .then((respuesta) => {
        const cursos = respuesta.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const nuevoCurso = async (curso, docente, opcion, aula, precio) => {
    await axios
      .post(
        URL,
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        },
        {
          curso: curso,
          docente: extraerDatosDeUsuario()[0],
          opcion: opcion,
          aula: aula,
          precio: precio,
        }
      )
      .then((respuesta) => {
        console.log(respuesta.data.curso);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const modificarCurso = async (idCurso, camposPorCambiar) => {
    await axios
      .patch(
        URL + { idCurso },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        },
        camposPorCambiar
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const eliminarCurso = async (idCurso) => {
    await axios
      .delete(URL + { idCurso }, {
        headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return <div>FiltrarCursos</div>;
};

export default CursosFiltrar;
