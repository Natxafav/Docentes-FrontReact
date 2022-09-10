import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ListarDocentes from "./ListarDocentes";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";
import "./css/varios.css";

const Docentes = () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;

  const [todosDocentes, setTodosDocentes] = useState([]);

  const navegar = useNavigate();
  const getDocentes = async () => {
    await axios
      .get(URL, {
        headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
      })
      .then((datos) => {
        setTodosDocentes(datos.data.docentes);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getDocentes();
  }, []);

  return (
    <div className=" mapdocente">
      {todosDocentes.map((docente) => {
        return <ListarDocentes key={docente._id} docente={docente} />;
      })}
    </div>
  );
};

export default Docentes;
