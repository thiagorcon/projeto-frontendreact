import Produtos from "../ListaProdutos/Produtos"
import Filtros from "../Filtros/Filtros"
import { Imagem, ContainerBloco, ContainerBls } from "../ListaProdutos/ProdutosStyle";


const Itens =({produto}) =>{

return (
<>
        <ContainerBloco key={produto.id}>
          <ContainerBls>
            <Imagem src={produto.foto} alt={produto.produto} />
            <p>{produto.produto}</p>
            <p>R$ {produto.preco},00</p>
          </ContainerBls>
        </ContainerBloco>
</>
)
}


export default Itens