import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = ({ changeLogout }) => {
  const navegar = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("DatosUsuario");
    navegar("/");

    changeLogout();
  };

  useEffect(() => {
    cerrarSesion();
  }, []);
};

export default Logout;
