import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalago of catalogo) {
    const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between group shadow-xl shadow-slate-400 rounded-lg" id="card-produto-${produtoCatalago.id}">
    <div class="h-full h-full overflow-hidden rounded-lg">
      <img
        src="./assets/img/${produtoCatalago.imagem}"
        alt="Porduto 1 do magazine Hashtag"
        class="group-hover:scale-110 duration-500 origin-top-left w-full h-full object-cover cursor-pointer"
      />
    </div>
      <p class="text-sm">${produtoCatalago.nome}</p>
      <p class="text-sm">${produtoCatalago.marca}</p>
      <p class="text-sm">${produtoCatalago.preco}</p>
      <button id="adicionar-${produtoCatalago.id}" class="bg-slate-950 hover:bg-slate-700 duration-500 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
    </divc> `;
    document.querySelector("#container-produto").innerHTML += cartaoProduto;
    document.getElementById(`adicionar-${produtoCatalago.id}`);
  }
  for (const produtoCatalago of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalago.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalago.id));
  }
}
