import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ListarDocentes from "./ListarDocentes";
import { extraerDatosDeUsuario } from "./Funcionalidad";

import "./css/varios.css";

const Docentes = ({ changeLogin }) => {
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/docentes/";

  const [todosDocentes, setTodosDocentes] = useState([]);
  changeLogin();

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
