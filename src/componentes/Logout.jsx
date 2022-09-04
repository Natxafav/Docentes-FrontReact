import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = ({ gestionarLogout }) => {
  const navegar = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("DatosUsuario");
    // gestionarLogout();
  };
  useEffect(() => {
    cerrarSesion();
    navegar("/");
  }, []);
};

export default Logout;
