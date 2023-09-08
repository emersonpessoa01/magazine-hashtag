import { renderizarCatalogo } from "./src/cartaoProduto";
import {
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";
import { atualizarPrecoCarrinho } from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
