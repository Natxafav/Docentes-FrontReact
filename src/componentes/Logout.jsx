import React from "react";

const Logout = () => {
  localStorage.removeItem("DatosUsuario");

  return <div>Nos vemos!</div>;
};

export default Logout;
