import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import CursosListar from "./CursosListar";
import { useNavigate } from "react-router-dom";
import "./css/varios.css";
import CursosBuscar from "./CursosBuscar";

const CursosPrincipal = () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;

  const [todosCursos, setTodosCursos] = useState([]);
  const [userId, setUserId] = useState(null);

  const navegar = useNavigate();
  const goTo = () => {
    navegar("/cursos/nuevo");
  };

  useEffect(() => {
    const getCursos = async () => {
      await axios
        .get(URL, {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        })
        .then((datos) => {
          setTodosCursos(datos.data.cursos);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getCursos();
  }, []);

  return (
    <div className="mapcursos">
      <div className="nuevoCursoContainer">
        <button className="crearCurso" onClick={goTo}>
          CREAR
        </button>
      </div>

      {todosCursos.map((curso) => {
        return <CursosListar key={curso._id} curso={curso} />;
      })}
    </div>
  );
};

export default CursosPrincipal;
