import { criaCliente, nome, email } from "./cliente-controler.js";
const url = 'http://localhost:3000/profile';

const apiGet = async () =>{
    const response = await fetch(url)

    const data = await response.json()

    data.map((cliente) => criaCliente(cliente))
}

export const apiPost = async () =>{
    const response = await fetch(url, {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            nome: nome.value,
            email: email.value,
        })
    })

    const data = await response.json()
    controler.criaCliente(data)
}
apiGet()








