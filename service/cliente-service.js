import { criaCliente, nome, email } from "./cliente-controler.js";
const url = "http://localhost:3000/profile";

const apiGet = async () => {
  const response = await fetch(url);

  const data = await response.json();
  data.map((cliente) => criaCliente(cliente, cliente.id));
};

export const apiPost = async () => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome.value,
      email: email.value,
    }),
  });

  const data = await response.json();

  criaCliente(data, data.id);
};

export const apiDelete = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};

apiGet();
