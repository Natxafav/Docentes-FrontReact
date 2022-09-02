import React from "react";
//npm i react-hook-form
import "./loginRegister.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const URL = `${process.env.REACT_APP_BACKEND_URL}/docentes/`;

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const usuRegister = async (data) => {
    try {
      const response = await axios
        .post(URL, {
          nombre: data.nombre,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          console.log("login correcto");
          console.log(response.data);
          localStorage.setItem(
            "DatosUsuario",
            JSON.stringify({
              userId: response.data.userId,
              token: response.data.token,
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
      setValue("nombre", null);
      setValue("email", null);
      setValue("password", null);

      return console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(usuRegister)}>
        <div className="form-container-register">
          <div className="label-container-register">
            <label>REGISTRO</label>
          </div>
          <div className="input-container-register">
            <input
              className="form-input-register"
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
              className="form-input-register"
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
            {errors.email &&
              errors.email.type === "required" &&
              "Campo requerido"}
            {errors.email &&
              errors.email.type === "minLength" &&
              "Longitud minima de 5 caracteres"}
            <div className="password-resgister">
              <input
                className="form-input-register"
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
            </div>
          </div>
          <div className="button-container-register">
            <input
              className="enviar"
              type="submit"
              value="Crear cuenta"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
