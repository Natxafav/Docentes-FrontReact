import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ListarDocentes from "./ListarDocentes";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";

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
      <div className="div-form-selector">
        <form action="#" className="form-selector">
          <select name="accion" className="selector">
            <option className="accion" value={""}>
              Seleccionar acción.{" "}
            </option>
            <option className="buscar" value={"buscar"}>
              Buscar
            </option>
            <option className="modificar" value={"modificar"}>
              Modificar
            </option>
            <option className="eliminar" value={"eliminar"}>
              Eliminar
            </option>
          </select>
        </form>
      </div>
      {todosDocentes.map((docente) => {
        return <ListarDocentes key={docente._id} docente={docente} />;
      })}
    </div>
  );
};

export default Docentes;
