import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CursosBuscResp from "./CursosBuscResp";
const CursosBuscar = () => {
  const [query, setQuery] = useState();
  const [datos, setDatos] = useState([]);
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const gestorBusca = (e) => {
    setQuery(e.target.value);
  };

  const gestorTecla = (e) => {
    const tecla = e.target.value;
  };
  useEffect(() => {
    const recupera = async () => {
      if (query.length === 0) {
        const res = await axios.get(URL);
        setDatos(res.data.cursos);
      } else {
        const res = await axios.get(URL + `buscar/${query}`);
        setDatos(res.data.cursos);
      }
    };
    recupera();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        name="busca"
        placeholder="Buscar"
        onChange={gestorBusca}
        onKeyDown={gestorTecla}
      ></input>
      <CursosBuscResp datos={datos} />
    </div>
  );
};

export default CursosBuscar;
