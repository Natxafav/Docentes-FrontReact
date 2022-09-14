import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { extraerDatosDeUsuario } from "./Funcionalidad";

const Logout = ({ changeLogout }) => {
  const navegar = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("DatosUsuario");
    navegar("/");

    changeLogout(extraerDatosDeUsuario());
  };

  useEffect(() => {
    cerrarSesion();
  }, []);
};

export default Logout;
