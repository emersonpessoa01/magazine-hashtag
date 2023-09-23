import {
  apagarDoLocalStorage,
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
  salvarLocalStorage,
} from "./src/utilidades";

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}
desenharProdutosCheckout();

/* FINALIZAR COMPRA */
function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };
  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  
  salvarLocalStorage("historico", historicoDePedidosAtualizado);

  apagarDoLocalStorage();

  window.location.href = `${window.location.origin}/pedidos.html`;
}
document.addEventListener("submit", (evt) => finalizarCompra(evt));
