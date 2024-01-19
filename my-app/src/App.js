import capacete from "./img/capacete.jpg";
import "./index.js";
import "./App.css";
import Header from "./Componentes/Header/Header.js";
import Filtros from "./Componentes/ListaProdutos/Filtros.js";
import Produtos from "./Componentes/ListaProdutos/Produtos.js";

function App() {

  const produto1 = {
    produto : 'capacete de astronauta', 
    imagem : capacete,
  }
  //teste gihub desktop
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
          <Produtos  produto1={produto1} >
          </Produtos>
        </div>
        <div className="div3"></div>
      </main>
      <footer></footer>
    </>

    
  );
}

export default App;
