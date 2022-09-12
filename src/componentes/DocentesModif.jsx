import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import axios from "axios";
import { useState } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import { useNavigate } from "react-router-dom";

const DocentesModif = ({ docenteConcreto }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;
  // const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/docentes/";

  console.log(docenteConcreto);
  const [docentes, setDocentes] = useState(docenteConcreto.curso);
  const [emails, setEmails] = useState(docenteConcreto.email);

  const idUsuario = docenteConcreto._id;
  const navegar = useNavigate();

  const modificarDocente = async (e) => {
    await axios
      .patch(
        URL + idUsuario,
        {
          nombre: docentes,
          email: emails,
          cursos: docenteConcreto.cursos,
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

  const eliminarDocente = async () => {
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
  };
  const gestorDocente = (e) => {
    setDocentes(e.target.value);
  };
  const gestorEmail = (e) => {
    setEmails(e.target.value);
  };

  return (
    <div className="form-cursosmod">
      <div className="form-modif-curso">
        <form action="#" className="form-modif curso">
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
            <button className="botonModif modif" onClick={modificarDocente}>
              {<FaEdit className="imgBoton" />}
            </button>
            <button className="botonModif eliminar" onClick={eliminarDocente}>
              {<FaTrash className="imgBoton" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocentesModif;
