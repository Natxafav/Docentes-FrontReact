import React from "react";
import "./css/formularios.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { extraerDatosDeUsuario } from "./Funcionalidad";

const NuevoCurso = () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/cursos/`;
  const navegar = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const crearCurso = async (e) => {
    console.log(extraerDatosDeUsuario()[0] + "    login supuesto");
    console.log(e);

    await axios
      .post(
        URL,
        {
          curso: e.curso,
          docente: extraerDatosDeUsuario()[0],
          opcion: e.opcion,
          aula: e.aula,
          precio: e.precio,
        },
        {
          headers: { Authorization: "Bearer " + extraerDatosDeUsuario()[1] },
        }
      )
      .then((res) => {
        console.log("esta es mi respeuestasdadf" + res);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setValue("curso", "");
    setValue("opcion", "");
    setValue("aula", "");
    setValue("precio", null);
    navegar("/cursos");
  };

  return (
    <div className="crearCursoPage">
      <form
        className="form-container newCurso"
        onSubmit={handleSubmit(crearCurso)}
      >
        <input
          className="form-input newCurso"
          type="text"
          name="curso"
          placeholder="CURSO"
          {...register(
            "curso",
            { minLength: 5 },
            { required: true, message: "Campo requierido" }
          )}
        ></input>
        {errors.curso && errors.curso.type === "required" && "Campo requerido"}
        {errors.curso &&
          errors.curso.type === "minLength" &&
          "Longitud minima de 5 caracteres"}

        <select
          name="opcion"
          id="opcion"
          {...register("opcion", { required: true })}
        >
          <option value="">Seleccione asistencia</option>
          <option value="Virtual">Virtual</option>
          <option value="Semi-presencial">Semi-presencial</option>
          <option value="Presencial">Presencial</option>
        </select>
        {errors.opcion &&
          errors.opcion.type === "required" &&
          "Campo requerido"}

        <select name="aula" id="aula" {...register("aula", { required: true })}>
          <option value="">Seleccione aula</option>
          <option value="Aula-1">Aula-1</option>
          <option value="Aula-2">Aula-2</option>
          <option value="Aula-3">Aula-3</option>
          <option value="Aula-4">Aula-4</option>
        </select>
        {errors.option &&
          errors.option.type === "required" &&
          "Campo requerido"}
        <input
          className="form-input newCurso"
          type="number"
          name="precio"
          placeholder="PRECIO"
          {...register(
            "precio",
            { minLength: 3 },
            { required: true, message: "Campo requierido" }
          )}
        ></input>
        {errors.precio &&
          errors.precio.type === "required" &&
          "Campo requerido"}
        {errors.precio &&
          errors.precio.type === "minLength" &&
          "Longitud minima de 5 caracteres"}

        <div className="button-container register">
          <input
            className="enviar"
            type="submit"
            value="Crear curso nuevo"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default NuevoCurso;
