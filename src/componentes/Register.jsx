import React from "react";
//npm i react-hook-form
import { useState, useEffect, useForm } from "react";
import axios from "axios";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gestorFormulario = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(gestorFormulario)}>
        <input
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
          type="email"
          name="email"
          placeholder="EMAIL"
          {...register(
            "email",
            { minLength: 5 },
            { required: true, message: "Campo requierido" }
          )}
        ></input>
        {errors.email && errors.email.type === "required" && "Campo requerido"}
        {errors.email &&
          errors.email.type === "minLength" &&
          "Longitud minima de 5 caracteres"}
        <input
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
        <input type="submit" value="Crear cuenta"></input>
      </form>
    </div>
  );
};

export default Register;
