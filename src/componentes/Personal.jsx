import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import PersonalMostrar from "./PersonalMostrar";
import "./css/varios.css";

const Personal = () => {
  const email = extraerDatosDeUsuario()[2];

  const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/personal/${email}`;
  // const URL = `https://winged-carrier-361708.oa.r.appspot.com/api/docentes/personal/${email}`;

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
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
    personalDocente();
  }, []);

  return (
    <div className="personal">
      {usuario.map((dato) => {
        return <PersonalMostrar key={dato._id} dato={dato} />;
      })}
    </div>
  );
};

export default Personal;
