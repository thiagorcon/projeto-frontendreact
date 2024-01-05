import { Imagem, ContainerBloco, ContainerBls } from "./ProdutosStyle";
import { produto1,produto2,produto3,produto4,produto5,produto6,produto7} from "./ListadeItensJson";
export default function Produtos() {
  return (
    <>
      <ContainerBloco>
        <ContainerBls>
          <Imagem src={produto1.foto}></Imagem>
          <p>{produto1.produto}</p>
          <p>R$ {produto1.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
        <ContainerBls>
          <Imagem src={produto2.foto}></Imagem>
          <p>{produto2.produto}</p>
          <p>R$ R$ {produto2.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
        <ContainerBls>
          <Imagem src={produto3.foto}></Imagem>
          <p>{produto3.produto}</p>
          <p>R$ R$ {produto3.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
        <ContainerBls>
          <Imagem src={produto4.foto}></Imagem>
          <p>{produto4.produto}</p>
          <p>R$ R$ {produto4.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
        <ContainerBls>
          <Imagem src={produto5.foto}></Imagem>
          <p>{produto5.produto}</p>
          <p>R$ R$ {produto5.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
        <ContainerBls>
          <Imagem src={produto6.foto}></Imagem>
          <p>{produto6.produto}</p>
          <p>R$ R$ {produto6.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
        <ContainerBls>
          <Imagem src={produto6.foto}></Imagem>
          <p>{produto6.produto}</p>
          <p>R$ R$ {produto6.preco},00</p>
          <button> Adicione ao carrinho</button>
        </ContainerBls>
      </ContainerBloco>
    </>
  );
}

//  export default Produtos;

// import React from "react";
// // import "./styles.css";
// // import CardVideo from "./Componentes/CardVideo";

// export default function Produtos({produto1}) {

// const produto1 = {
//   tituloVideo : 'avengers',
//   imagem : 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg'
// }
// const produto2 = {
//    tituloVideo : 'avengers - age of ultron',
//    imagem : 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg'
// }

// }
