import { React, useState } from "react";
// import "./index.js";
import "./App.css";
import Header from "./Componentes/Header/Header.js";
import Filtros from "./Componentes/Filtros/Filtros.js";
import produtos from "./Componentes/ListaProdutos/ListaDeProdutosJson.js";

import CardProdutos from "./Componentes/ListaProdutos/CardProdutos.js";


function App() {
  const [valorMin, setValorMin] = useState('');
  const [valorMax, setValorMax] = useState('');

  function handleValorMinimo(event) {
    setValorMin(event.target.value);
    console.log(event.target.value);
  }

  function handleValorMaximo(event) {
    setValorMax(event.target.value);
    console.log(event.target.value);
  }

  const produtosFiltrados = produtos.filter((item) => {
    return (item.preco >= valorMin || valorMin ==='') && (item.preco <= valorMax || valorMax ==='');
  });

  return (
    <>
      <main>
        <header>
          <Header />
        </header>

        <div className="div1">
          <Filtros
            valorMin={valorMin}
            valorMax={valorMax}
            setValorMin={setValorMin}
            setValorMax={setValorMax}
            handleValorMinimo={handleValorMinimo}
            handleValorMaximo={handleValorMaximo}
          />
        </div>
        <div className="div2">
        {produtosFiltrados && produtosFiltrados.map((item) => (
          
          <CardProdutos 
          
          produto={item}/>         
     ))}
          
     
        </div>
        <div className="div3">          
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
