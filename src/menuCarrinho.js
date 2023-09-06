import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}
function fecharCarrinho() {
  document
    .getElementById("carrinho")
    .classList.remove("right-[0px]"); /*desaparecer  */
  document.getElementById("carrinho").classList.add("right-[-360px]");
}
export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function removerDoCarrinho(idProdutorial){
  delete idsProdutoCarrinhoComQuantidade[idProdutorial];
}

function renderizarProdutosCarrinho(){

}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto);
}
function decrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto);
}
function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}
function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];
  for(const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  }

  // elementoArticle.classlist.add("flex");

  const { imagem, nome, preco, id } = produto;
  const cartaoProdutoCarrinho = `
  <button id="fechar-carrinho" class="absolute top-0 right-2">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
  </button>
  <img
    src="./assets/img/${imagem}"
    alt="Carrinho: ${nome}"
    title="Carrinho: Camisa Larga com Bolsos"
    class="h-24 rounded-lg"
  />
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 px-1 text-sm">${nome}</p>
    <p class="text-slate-400 px-1 text-xs">Tamanho: M</p>
    <p class="text-green-700 px-1 font-medium text-lg">$${preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <button id="decrementar-produto-${id}">-</button>
      <p id="quantidade-${id}" class="ml-2">${idsProdutoCarrinhoComQuantidade[id]}</p>
    <button id="incrementar-produto-${id}" class="ml-2">+</button>
  </div>
  `;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutoCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(id));
  document
    .getElementById(`incrementar-produto-${id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(id));
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return; /* sai da condição e não executa proxima função(não adiciona o mesmo produto) */
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoNoCarrinho(idProduto);
}
