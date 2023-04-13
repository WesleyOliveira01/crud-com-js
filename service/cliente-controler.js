import { apiPost, apiDelete } from "./cliente-service.js";

export const nome = document.querySelector("[data-nome]");
export const email = document.querySelector("[data-email]");
const container = document.querySelector("[data-tabela]");
const form = document.querySelector("[data-form]");

export const criaCliente = (cliente, id) => {
  const novaLinha = document.createElement("tr");
  const conteudo = `<tr>
    <td class="td" data-td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li>
          <button class="botao-simples botao-simples--editar">
            <a href="./editar.html">Editar</a>
          </button>
        </li>
        <li>
          <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
        </li>
      </ul>
    </td>
  </tr>`;

  novaLinha.innerHTML = conteudo;
  novaLinha.dataset.id = id;
  container.appendChild(novaLinha);
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    apiPost();
    window.location.href = "../telas/cadastro_concluido.html";
  });
}

container.addEventListener("click", (e) => {
  e.preventDefault();
  const btnEditar = e.target.closest(".botao-simples--editar");

  if (btnEditar) {
    const linha = btnEditar.closest("[data-id]");
    const id = linha.dataset.id;
    window.location.href = `../telas/editar.html?id=${id}`;
  }

  const btnExcluir =
    e.target.className == "botao-simples botao-simples--excluir";

  if (btnExcluir) {
    const linha = e.target.closest("[data-id]");
    const id = linha.dataset.id;
    apiDelete(id);
  }
});
