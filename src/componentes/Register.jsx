import React from "react";
//npm i react-hook-form
import "./css/formularios.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = ({ changeLogin }) => {
  // const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;
  const URL = "https://winged-carrier-361708.oa.r.appspot.com/api/docentes/";
  const navegar = useNavigate();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const usuRegister = async (data) => {
    await axios
      .post(URL, {
        nombre: data.nombre,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem(
          "DatosUsuario",
          JSON.stringify({
            userId: response.data.userId,
            token: response.data.token,
            email: response.data.email,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });

    changeLogin();

    navegar("/personal");
    setValue("nombre", null);
    setValue("email", null);
    setValue("password", null);
  };

  return (
    <div className="register-page">
      <form
        className="form-container register"
        onSubmit={handleSubmit(usuRegister)}
      >
        <label className="label-container register"></label>

        <input
          className="form-input register"
          type="text"
          name="nombre"
          placeholder="NOMBRE"
          {...register(
            "nombre",
            { minLength: 5 },
            { required: true, message: "Campo requierido" }
          )}
        ></input>
        {errors.nombre &&
          errors.nombre.type === "required" &&
          "Campo requerido"}
        {errors.nombre &&
          errors.nombre.type === "minLength" &&
          "Longitud minima de 5 caracteres"}
        <input
          className="form-input register"
          type="email"
          name="email"
          placeholder="EMAIL"
          {...register(
            "email",
            {
              pattern:
                /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/,
            },
            { minLength: 5 },
            { required: true, message: "Campo requierido" }
          )}
        ></input>
        {errors.email && errors.email.type === "required" && "Campo requerido"}
        {errors.email &&
          errors.email.type === "minLength" &&
          "Longitud minima de 5 caracteres"}

        <input
          className="form-input register"
          type="password"
          name="password"
          placeholder="PASSWORD"
          {...register(
            "password",
            { minLength: 5 },
            { required: true, message: "Campo requierido" }
          )}
        ></input>
        {errors.password &&
          errors.password.type === "required" &&
          "Campo requerido"}
        {errors.password &&
          errors.password.type === "minLength" &&
          "Longitud minima de 5 caracteres"}

        <div className="button-container register">
          <input className="enviar" type="submit" value="Crear cuenta"></input>
        </div>
      </form>
    </div>
  );
};

export default Register;
