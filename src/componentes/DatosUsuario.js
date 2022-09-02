export const extraerDatosDeUsuario = () => {
  const datosRecuperar = JSON.parse(localStorage.getItem("DatosUsuario"));
  if (datosRecuperar && datosRecuperar.token) {
    // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token

    return [datosRecuperar.useId, datosRecuperar.token];
  }
};
