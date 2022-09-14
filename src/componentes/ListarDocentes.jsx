import React from "react";
import "./css/varios.css";
import { useState } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import DocentesModif from "./DocentesModif";
import axios from "axios";

const ListarDocentes = ({ docente, changeLogin }) => {
  const cursos = docente.cursos.map((dato) => {
    return <div key={dato._id}>{dato.curso}</div>;
  });

  // const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/docentes/";
  const [userId, setUserId] = useState();
  const [cheched, setCheched] = useState(false);
  const [docenteConcreto, setDocenteConcreto] = useState({
    _id: extraerDatosDeUsuario()[0],
    nombre: "",
    email: "",
    cursos: "",
  });
  changeLogin();
  const checkedChange = (e) => {
    setCheched(!cheched);
    setUserId(e.target.value);
  };

  const getDocente = async () => {
    await axios
      .get(URL + userId, {
        headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
      })
      .then((datos) => {
        setDocenteConcreto(datos.data.docente);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="listaCursos">
      {cheched ? <DocentesModif docenteConcreto={docenteConcreto} /> : null}
      <div className="individuo">
        <div className="check">
          <div className="etiquetas">Nombre: </div>
          <div className="datoDocente">{docente.nombre}</div>

          <div className="etiquetas">Email:</div>
          <div className="datoDocente">{docente.email}</div>

          <div className="etiquetas">Cursos:</div>
          <div className="datoDocente">{cursos} </div>
          <div className="botones">
            <input
              type="checkbox"
              className="checked-cursos"
              value={docente._id}
              onClick={checkedChange}
            ></input>
            <button
              type="button"
              className="botonModif curso"
              onClick={getDocente}
            >
              Buscar Datos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarDocentes;
