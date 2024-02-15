import CardProdutos from "./CardProdutos";
import { ContainerBloco} from "./ProdutosStyle";
// import produtos from "./ListaDeProdutosJson";

export default function Produtos({ produto }) {
  return (
    <>
      {/* <h1>Produtos selecionados</h1> */}
      <ContainerBloco>        
        <CardProdutos/>
      </ContainerBloco>
    </>
  );
}
