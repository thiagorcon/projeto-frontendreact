import React from "react";

function Filtros() {
  return (
    <>
    <h1>Filtros</h1>
      <label>Valor mínimo :</label><br/>
      <input type="number" value="" placeholder=" valor" />
      <br/>
      <label>Valor máximo :</label><br/>
      <input type="number" value="" placeholder=" valor" />
      <br />
      <label>Busca por nome:</label><br/>
      <input type="text" value="" placeholder=" nome" />
    </>
  );
}

export default Filtros;
