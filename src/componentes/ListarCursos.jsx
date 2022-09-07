import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./css/varios.css";
import { useState, useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListarCursos = ({ curso }) => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const [cursos, setCursos] = useState(curso.curso);
  const [aulas, setAulas] = useState(curso.aula);
  const [opciones, setOpciones] = useState(curso.opcion);
  const [precios, setPrecios] = useState(curso.precio);
  const navegar = useNavigate();

  const modificarCursos = async () => {
    await axios
      .patch(
        URL + curso._id,
        {
          curso: cursos,
          docente: extraerDatosDeUsuario()[0],
          aula: aulas,
          opcion: opciones,
          precio: precios,
        },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        }
      )
      .then((res) => {
        console.log("Estoy");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const gestorCurso = (e) => {
    setCursos(e.target.value);
  };
  const gestorOpcion = (e) => {
    setOpciones(e.target.value);
  };
  const gestorAula = (e) => {
    setAulas(e.target.value);
  };
  const gestorPrecio = (e) => {
    setPrecios(e.target.value);
  };

  return (
    <div className="listaCursos">
      {/* <input  type={"checkbox"} id="cursocheckb" /> */}
      <form action="#">
        <div className="individuo" htmlFor="cursocheckb">
          <div className="etiquetas">Curso: </div>
          <div className="datocurso">{curso.curso}</div>
          <input
            onChange={gestorCurso}
            type="text"
            value={cursos}
            placeholder="Modificar curso"
          />

          <div className="etiquetas">Aula: </div>
          <div className="datocurso">{curso.aula}</div>
          <select onChange={gestorAula} name="aula" id="aula" value={aulas}>
            <option value="">Seleccione aula</option>
            <option value="Aula-1">Aula-1</option>
            <option value="Aula-2">Aula-2</option>
            <option value="Aula-3">Aula-3</option>
            <option value="Aula-4">Aula-4</option>
          </select>

          <div className="etiquetas">Docente:</div>
          <div className="datocurso">{curso.docente.nombre}</div>

          <div className="etiquetas">Opcion:</div>
          <div className="datocurso">{curso.opcion} </div>
          <input
            onChange={gestorOpcion}
            type="text"
            value={opciones}
            placeholder="Modificar opciones"
          />

          <div className="etiquetas">Precio:</div>
          <div className="datocurso">{curso.precio} </div>
          <input
            onChange={gestorPrecio}
            type="text"
            value={precios}
            placeholder="Modificar precio"
          />
          <div className="botones">
            <button className="button modificar" onClick={modificarCursos}>
              {<FaEdit />}
            </button>
            <button
              className="button eliminar"
              onClick={async () => {
                await axios
                  .delete(URL + curso._id, {
                    headers: {
                      Authorization: "Bearer " + extraerDatosDeUsuario()[1], // En los headers van 'Bearer ' + token recibido
                    },
                  })
                  .then((response) => {
                    window.location.reload(true);
                  })
                  .catch((error) => {
                    console.log(error.response.data);
                  });
              }}
            >
              {<FaTrash />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListarCursos;
