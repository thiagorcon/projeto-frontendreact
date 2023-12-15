//import nave from './img/capacete.jpg'
import {Container }from '../ListaProdutos/ProdutosStyle'

export default function Produtos({produto1}) {

     return(
         <>
         <Container src={produto1.imagem} alt={produto1.tituloVideo}></Container>
             
             <p>{produto1.produto}</p>
             <p>R$ 30,00</p>
             <button> Adicione ao carrinho</button>
         </>
     )
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