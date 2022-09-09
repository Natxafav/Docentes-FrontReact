import React from "react";

const CursosBuscarResp = ({ datos }) => {
  return (
    <div>
      {datos.map((dato) => {
        <tr key={dato.id}>
          <td>{dato.curso}</td>
          {dato.docente !== null ? (
            <td>{dato.docente.nombre}</td>
          ) : (
            <td>No Asignado</td>
          )}
        </tr>;
      })}
    </div>
  );
};

export default CursosBuscarResp;
