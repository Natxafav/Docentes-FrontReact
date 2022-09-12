import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import ListarCursos from "./ListarCursos";
import { useNavigate } from "react-router-dom";
import "./css/varios.css";
import Buscar from "./Buscar";

const Cursos = () => {
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/cursos/";

  const [todosCursos, setTodosCursos] = useState([]);
  // const [userId, setUserId] = useState(null);

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
      {" "}
      <div className="nuevoCursoContainer">
        <button className="crearCurso" onClick={goTo}>
          CREAR
        </button>
      </div>
      {todosCursos.map((curso) => {
        return <ListarCursos key={curso._id} curso={curso} />;
      })}
    </div>
  );
};

export default Cursos;
