import { apiPost,apiDelete } from "./cliente-service.js";

export const nome = document.querySelector('[data-nome]');
export const email = document.querySelector('[data-email]');
const container = document.querySelector('[data-tabela]')
const form = document.querySelector("[data-form]")

export const criaCliente = (cliente,id) => {
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
    novaLinha.dataset.id = id
    container.appendChild(novaLinha)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    apiPost()
    window.location.href = '../telas/cadastro_concluido.html';
})

form.addEventListener('click',(e) =>{
    e.preventDefault()

    const btnExcluir = e.target.className = 'botao-simples botao-simples--excluir'

    if(btnExcluir){
        const linha = e.target.closest('[data-id]')
        let id = linha.dataset.id
        apiDelete(id)
    }
   
})
