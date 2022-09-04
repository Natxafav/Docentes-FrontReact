import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import PersonalMostrar from "./PersonalMostrar";

const Personal = () => {
  const email = extraerDatosDeUsuario()[2];

  const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/personal/${email}`;

  const [usuario, setUsuario] = useState([]);

  const personalDocente = async () => {
    await axios
      .get(URL, {
        headers: { Authorization: "Bearer" + extraerDatosDeUsuario()[1] },
      })
      .then((datos) => {
        setUsuario(datos.data.docentes);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    personalDocente();
  }, []);

  return (
    <div className="personal">
      {usuario.map((dato) => {
        return <PersonalMostrar key={dato.id} dato={dato} />;
      })}
    </div>
  );
};

export default Personal;
