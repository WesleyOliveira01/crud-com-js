const url = 'http://localhost:3000/profile';
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const container = document.querySelector('[data-tabela]')
const form = document.querySelector("[data-form]")


const apiGet = async () =>{
    const response = await fetch(url)

    const data = await response.json()

    data.map((cliente) => criaCliente(cliente))
}

const apiPost = async () =>{
    const response = await fetch(url, {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            nome: nome.value,
            email: email.value
        })
    })

    const data = await response.json()
    criaCliente(data)
}
apiGet()
const criaCliente = (cliente) => {
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



