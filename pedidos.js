import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./src/utilidades";



function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `<p class= "text-xl text-bold">${pedidoComData.dataPedido}</p>
  <section id="container-pedidos-${pedidoComData.dataPedido}"></section>
  `;

  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;
  console.log(main)

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function renderHistoricoPedidos() {
  const historico = lerLocalStorage("historico");
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
}

renderHistoricoPedidos();
