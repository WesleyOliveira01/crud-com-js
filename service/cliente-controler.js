import { apiPost } from "./cliente-service.js";

export const nome = document.querySelector('#nome');
export const email = document.querySelector('#email');
const container = document.querySelector('[data-tabela]')
const form = document.querySelector("[data-form]")


export const criaCliente = (cliente) => {
    const novaLinha = document.createElement('tr');
    const conteudo = `<td class="td" data-td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    novaLinha.innerHTML = conteudo

    container.appendChild(novaLinha)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    apiPost()
})

