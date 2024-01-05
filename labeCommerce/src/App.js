import {produto1, produto2, produto3, produto4, produto5, produto6, produto7 } from "./Componentes/ListaProdutos/ListadeItensJson.js";
import "./index.js";
import "./App.css";
import Header from "./Componentes/Header/Header.js";
import Filtros from "./Componentes/Filtros/Filtros.js";
import Produtos from "./Componentes/ListaProdutos/Produtos.js";

function App() {
  
  return (
    <>
      <main>
        <header>
          <Header />
        </header>

        <div className="div1">
          <Filtros></Filtros>
        </div>
        <div className="div2">
          <Produtos  produto1={produto1} produto2={produto2} produto3={produto3} produto4={produto4} produto5={produto5} produto6={produto6} produto7={produto7} >
          </Produtos>
        </div>
        <div className="div3"></div>
      </main>
      <footer></footer>
    </>

    
  );
}

export default App;
