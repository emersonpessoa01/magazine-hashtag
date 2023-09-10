const catalagoProdutos = document.getElementById("container-produto");
// console.log(catalagoProdutos)

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalagoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderMasculinos() {
  exibirTodos();
  const produtosMasculinos = Array.from(
    catalagoProdutos.getElementsByClassName("false")
  );
  //   console.log(produtosMasculinos)

  for (const produto of produtosMasculinos) {
    produto.classList.add("hidden");
  }
  //    produtosMasculinos.forEach((item) => item.classList.add("hidden"));
}

function esconderFemininos() {
  exibirTodos();
  const produtosFemininos = Array.from(
    catalagoProdutos.getElementsByClassName("true")
  );

  for (const produto of produtosFemininos) {
    produto.classList.add("hidden");
  }
}
export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-feminino")
    .addEventListener("click", esconderMasculinos);
  document
    .getElementById("exibir-masculino")
    .addEventListener("click", esconderFemininos);
}
