import React from "react";

const BuscarResp = ({ datos }) => {
  return (
    <div>
      {datos.map((dato) => {
        return (
          <tr key={dato.id}>
            <td>{dato.curso}</td>
            {dato.docente !== null ? (
              <td>{dato.docente.nombre}</td>
            ) : (
              <td>No Asignado</td>
            )}
          </tr>
        );
      })}
    </div>
  );
};

export default BuscarResp;
