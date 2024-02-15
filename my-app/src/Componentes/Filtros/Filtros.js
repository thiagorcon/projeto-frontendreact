import React from "react";
function Filtros({ valorMin, valorMax, handleValorMinimo,handleValorMaximo }) {   

  return (
    
    <>
      <h1>Filtros</h1>
      <label>Valor mínimo :</label><br/>
      <input type="text" id="valorMinimo" value={valorMin} onChange={handleValorMinimo} />
      <br/>
      <label>Valor máximo :</label><br/>
      <input type="text" id="valorMaximo" value={valorMax} onChange={handleValorMaximo} />
      <br />
      <label>Busca por nome:</label><br/>
      <input type="text" value="" placeholder=" nome"/>      
    </>
    
  );
  
}

export default Filtros;






