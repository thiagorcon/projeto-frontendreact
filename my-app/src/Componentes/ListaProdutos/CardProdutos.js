import { Imagem, ContainerBloco,ContainerBls } from "./ProdutosStyle";

function CardProdutos({produto}) {
  return (
    <>
     <ContainerBloco>
      <Imagem src={produto.foto} alt={produto.produto} />
      <p>Nome: {produto.produto}</p>
      <p>R$ {produto.preco},00</p>
      <button>Comprar</button>
      
      </ContainerBloco>
      </>
  );
}

export default CardProdutos;
