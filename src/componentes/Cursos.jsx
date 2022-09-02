import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import ListarCursos from "./ListarCursos";

const Cursos = () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;

  const [todosCursos, setTodosCursos] = useState([]);

  const getCursos = async () => {
    await axios
      .get(URL, {
        headers: { Authorization: "Bearer" + extraerDatosDeUsuario()[1] },
      })
      .then((datos) => {
        setTodosCursos(datos.data.cursos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <div className="mapcursos">
      {todosCursos.map((curso) => {
        return <ListarCursos key={curso.id} curso={curso} />;
      })}
    </div>
  );
};

export default Cursos;
