import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";

const DocentesModif = ({ docenteConcreto, changeLogin }) => {
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/docentes/";

  const [docentes, setDocentes] = useState(docenteConcreto.nombre);
  const [emails, setEmails] = useState(docenteConcreto.email);

  const idUsuario = docenteConcreto._id;
  changeLogin();
  const navegar = useNavigate();

  const modificarDocente = async (e) => {
    e.preventDefault();
    await axios
      .patch(
        URL + idUsuario,
        {
          nombre: docentes,
          email: emails,
        },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        }
      )
      .then((response) => {})
      .catch((error) => {
        console.log(error.message);
      });
    navegar("/docentes");
    window.location.reload();
  };

  const eliminarDocente = async (e) => {
    e.preventDefault();
    await axios
      .delete(URL + idUsuario, {
        headers: {
          Authorization: "Bearer " + extraerDatosDeUsuario()[1], // En los headers van 'Bearer ' + token recibido
        },
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error.response.data);
      });
    navegar("/docentes");
    window.location.reload();
  };
  const gestorDocente = (e) => {
    setDocentes(e.target.value);
  };
  const gestorEmail = (e) => {
    setEmails(e.target.value);
  };

  useEffect(() => {
    setDocentes(docenteConcreto.nombre);
    setEmails(docenteConcreto.email);
  }, [docenteConcreto]);

  return (
    <div className="form-cursosmod">
      <div className="form-modif-curso">
        <form
          action="#"
          className="form-modif curso"
          onSubmit={modificarDocente}
          onReset={eliminarDocente}
        >
          <input
            className="nombreCursoModif"
            type="text"
            value={docentes}
            placeholder={docenteConcreto.nombre}
            onChange={gestorDocente}
          />
          <input
            className="aulaCursoModif"
            type="text"
            onChange={gestorEmail}
            placeholder={docenteConcreto.email}
            value={emails}
          ></input>

          <div className="cont BotonModif">
            <button type="submit" className="botonModif modif">
              {<FaEdit className="imgBoton" />}
            </button>
            <button type="reset" className="botonModif eliminar">
              {<FaTrash className="imgBoton" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocentesModif;
