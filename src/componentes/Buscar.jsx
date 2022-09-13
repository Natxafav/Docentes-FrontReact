import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import BuscarResp from "./BuscarResp";
import "./css/formularios.css";
const Buscar = () => {
  const [query, setQuery] = useState("");
  const [datos, setDatos] = useState([]);
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/cursos";
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos`;

  const gestorBusca = (e) => {
    setQuery(e.target.value);
  };

  const gestorTecla = (e) => {
    const tecla = e.target.value;
  };
  useEffect(() => {
    const recupera = async () => {
      if (query.length !== 0) {
        const res = await axios.get(URL + `/buscar/${query}`);
        setDatos(res.data.cursos);
      } else {
        const res = await axios.get(URL);
        setDatos(res.data.cursos);
      }
    };

    recupera();
  }, [query]);

  return (
    <div className="contGeneralSl">
      <div className="buscarFuncion">
        <input
          type="text"
          name="busca"
          className="buscarCurso"
          placeholder="Buscar por curso"
          onChange={gestorBusca}
          onKeyDown={gestorTecla}
        ></input>
      </div>
      <div className="contenSlider">
        {datos.map((datos) => {
          return <BuscarResp key={datos._id} dato={datos} />;
        })}
      </div>
    </div>
  );
};

export default Buscar;
